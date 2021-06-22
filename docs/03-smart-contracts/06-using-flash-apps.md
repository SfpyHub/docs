---
title: Using Flash Apps
id: 06-using-flash-apps
---

Flash Apps is a new concept being explored that facillitates the execution of smart contracts when a payment has been made, in an atomic fashion. For example, if a smart contract developer is trying to sell his NFT, a service, or anything that requires interaction with a smart contract and by extension, the Ethereum blockchain, that developer can now adhere to a standardized payment flow instead of building it from scratch for each use case. Additionally, at any point, the developer can revert the entire transaction and return funds back to the payee automatically without any extra logic or code.

:::caution

Flash Apps are still in early development and participants should ensure that there is enough trust between both parties before engaging in the transaction.

:::

We see Flash Apps evolving into a marketplace of trusted apps through an agreed upon standard that lists and ranks apps based on community interactions and experiences. This standard is yet to be developed.

The interface of a Flash App is extremely simple:

```solidity
  function afterPay(
    address sender,
    address token,
    uint256 amount,
    bytes calldata data
  ) external
```

:::info

This documentation is currently a work in progress. We plan to write a step by step guide on how to develop and test your Flash App. In the meantime please see out GitHub repo

:::

We've written a dummy Flash App that airdrops tokens to payees after they have paid to the interface. To see how to write your own Flash Apps, you can check out our examples available here:

- [`IExampleAirdrop.sol`](https://github.com/SfpyHub/sfpy-periphery/blob/main/contracts/examples/IExampleAirDrop.sol)
- [`ExampleAirDrop.sol`](https://github.com/SfpyHub/sfpy-periphery/blob/main/contracts/examples/ExampleAirDrop.sol)
- [`ExampleFlashCash.sol`](https://github.com/SfpyHub/sfpy-periphery/blob/main/contracts/examples/ExampleFlashCash.sol)