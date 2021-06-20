---
title: Sfpy Library
id: 03-library
---

## Functions
### poolFor
```solidity
  function poolFor(
    address factory,
    address token
  ) internal returns (address pool)
```

calculates the CREATE2 address for a pair without 
making any external calls

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`factory` | address | contract address of the factory
|`token` | address | contract address of the token

### getAmountIn
```solidity
  function getAmountIn(
    uint256 amountOut
  ) internal returns (uint256 amountIn)
```

calculates the minimum amount needed to be returned back from a flash loan
including the 0.1% fee

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountOut` | uint256 | the amount of tokens that were borrowed

