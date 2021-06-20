---
title: After Pay Callback
id: 02-callback
---

## Functions
### afterPay
```solidity
  function afterPay(
    address sender,
    address token,
    uint256 amount,
    bytes calldata data
  ) external
```

An interface that accepts a payment from a payee in order to execute 
any arbitrary code in a smart contract

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`sender` | address | the address of the payee making the payment
|`token` | address | the contract address of the token being used
|`amount` | uint256 | the amount of tokenAmount sent
|`data` | bytes | any aribitrary data needed to execute the Flash App

## Interface
```solidity
interface ISfpyCallback {
  /// @dev An interface that accepts a payment from a payee in order to execute 
  /// @dev any arbitrary code in a smart contract
  /// @param sender the address of the payee making the payment
  /// @param token the contract address of the token being used
  /// @param amount the amount of tokenAmount sent
  /// @param data any aribitrary data needed to execute the Flash App
  function afterPay(address sender, address token, uint256 amount, bytes calldata data) external;
}
```