---
title: Payments
id: 01-payments
---

# Introduction

Payments in SFPY are a simple way to exchange Ether or ERC-20 tokens for an equivalent amount of value between two parties.

For customers, payments are analogous to traditional payments in that given an amount to pay, the customer chooses either ETH or any ERC-20 token as the payment currency, and are presented with the amount of tokens they must pay based on an on-chain exchange rate quoted by Compound's [Price Oracle](https://compound.finance/open-price). They then execute the payment with one click transferring the tokens to a liquidity pool where they are kept for the recipient.

In this guide, we'll look at what happens during a payment at the protocol level in order to gain a deeper understanding of how SFPY works.

Payments on SFPY seem to operate almost exactly the same as traditional payments for end customers but behind the scenes there are major differences. 

- SFPY does not rely on any third-parties or middlemen that intercept, interfere or take a "cut" of the payment in any way. The only fees are gas fees that are paid to miners for securing the Ethereum network. The SFPY protocol does not charge any fees to merchants or customers. 

- Customers make payments to automated liquidity pools that hold tokens on behalf of all merchants on the SFPY metwork. These pools act as revenue generators for all merchants as long as merchants maintain a balance in the pool but merchants are free to withdraw all or part of their outstanding liquidity to their own self-hosted wallets.

## Anatomy of a payment

At the most basic level, all payments in SFPY happen within a single function aptly named `pay`:

```solidity
function pay(bytes32 request, uint256 tokenAmount, address token, uint256 rate);
```

## Making a payment
When interacting with the above function, callers are required to provide a few pieces of information:
- `bytes32 request`: This is an identifier for the payment ID on the SFPY API.
- `uint256 tokenAmount`: The amount of tokens that are being paid
- `address token`: The particiular ERC-20 token address being used to make the payment
- `uint256 rate`: The Open Price USD exchange rate for the token being used to make the payment.

## Sending tokens
What may be confusing is how SFPY _receives_ tokens for payments from the customer. Typically, smart-contracts which need tokens to perform some functionality require callers to first make an approval on the token contract, then call a function that in turn calls the `transferFrom` on the token contract. This is _not_ how SFPY pools accept tokens. Instead, pools check their token balance at the _end_ of every interaction. Then at the beginning of the _next_ interaction, current balances are differentiated against stored values to determine the amount of tokens that were sent by the current caller.

The takeaway is that **tokens must be transferred to pools before pay is called**. This means that to safely use the `pay` function, it must be called from _another smart contract_.

## Developer resources

- To see how to implement payments in a smart contract read [Paying from a smart contract](/docs/03-smart-contracts/02-paying-from-a-smart-contract)
- To see how to pay from the web interface, read [Making a payment](/docs/04-interface/03-making-a-payment)