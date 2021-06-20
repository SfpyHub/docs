---
title: Borrower
id: 04-borrower
---

## Functions
### borrow
```solidity
  function borrow(
    address sender,
    uint256 amount,
    bytes data
  ) external
```

Any smart contract that implements this interface can borrow
funds from a pool to execute a flash loan

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`sender` | address | the address to transfer the tokens to
|`amount` | uint256 | the amount to borrow
|`data` | bytes | any arbitrary data needed by the borrower during execution

## Interface

```solidity
pragma solidity ^0.8.0;

interface ISfpyBorrower {
    /// @dev Any smart contract that implements this interface can borrow
    /// @dev funds from a pool to execute a flash loan
    /// @param sender the address to transfer the tokens to
    /// @param amount the amount to borrow
    /// @param data any arbitrary data needed by the borrower during execution
    function borrow(address sender, uint256 amount, bytes calldata data) external;
}
```