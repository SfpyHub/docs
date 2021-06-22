---
title: Using Flash Loans
id: 05-using-flash-loans
---

Flash loans are an integral feature of SFPY. This allows pool contracts to generate revenue for liquidity providers by being a source of unrestrcited capital. This is done by pool contracts sending borrowed tokens to the recipient _optimistically_ without requiring any collateral. This is slightly atypical, as one might expect a pool to ensure it's secure before lending tokens out in case the borrower defaults. But because Ethereum transactions are _atomic_, we can roll back the entire borrow if it turns out that the contract hasn't received enough tokens to make itself whole by the end of the transaction.

To see how this all works, let's start by examining the interface of the `borrow` function:

```solidity
function borrow(uint256 amount, address token, address to, bytes calldata data);
```

For the sake of example, let's assume that we're dealing with a DAI pool, where DAI is `token`. `amount` specifies the amount of DAI that the `msg.sender` wants the pool to send to the `to` address. At this point you may be wondering how the contract _receives_ tokens. For a typical payment, it's actually the responsibility of `msg.sender` to ensure that enough DAI has _already been sent_ to the pool before `mint` is called (in the context of paying, this is all handled neatly by a router contract). But when executing a flash loan, _tokens do not need to be sent to the contract before calling `borrow`_. Instead, they must be sent from within a _callback function_ that the pool triggers on the `to` address.

## Triggering a Flash Loan

To execute a flash loan, callers must identify the pool from which they want to borrow the underlying token and call the `borrow` method on the pool.


```solidity
function borrow(address sender, uint256 amount, address token, bytes calldata data);
```

Pools call `borrow` with the `sender` argument set to the `msg.sender` of the `borrow`. `amount` is simply `amount` and `token` is the address of the underlying token.

There are several conditions that should be checked in all `uniswapV2Call` functions:

```solidity
function borrow(address sender, uint256 amount, address token, bytes calldata data) {
  address token = ISfpyPool(msg.sender).token(); // fetch the address of token

  assert(msg.sender == ISfpyFactory(factory).getPool(token)); // ensure that msg.sender is a pool
  // rest of the function goes here!
}
```

The first 2 lines simply fetch the token address from the pool, and the 3rd ensures that the `msg.sender` is an actual SFPY pool address.

## Repayment

At the end of `borrow`, contracts must return enough tokens to the pair to make it whole. Specifically, this means that the amount of the pool reserves after the swap, must be greater than before.

## Amount to return

When returning the token for repayment back to the pool, you can calculate the minimum amount to send back using the following logic:

`DAIReservePre - DAIWithdrawn + (DAIReturned) >= DAIReservePre`

It may be more intuitive to rewrite this formula in terms of a "fee" levied on the _withdrawn_ amount. If we rearrange, the formula looks like:

`DAIReturned - DAIWithdrawn >= 0`

In particular the fee levid to execute a flash loan is 0.1% so the formula above becomes

`DAIReturned - (DAIWithdrawn * 1.01) >= 0`

# Example

A fully functional example of flash swaps is available: [`ExampleFlashLoan.sol`](https://github.com/sfpyhub/sfpy-periphery/blob/main/contracts/examples/ExampleFlashLoan.sol).

# Interface

```solidity
import '@sfpy/core/contracts/interfaces/ISfpyBorrower.sol';
```

```solidity
pragma solidity >=0.8.0;

interface ISfpyBorrower {
  function borrow(address sender, uint256 amount, address token, bytes calldata data) external;
}
```

