---
title: Factory
id: 01-factory
---

## Functions
### constructor
```solidity
  function constructor(
  ) public
```

sets the owner of the factory
responsible for creating pools


### createPool
```solidity
  function createPool(
    address token
  ) external returns (address created)
```

given an address of an ERC-20 token, creates a pool
and initializes it. This is gas optimized to use the
CREATE2 op code when creating a pool.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | the ERC-20 token to create the pool for

### pools
```solidity
  function pools(
  ) external returns (uint256)
```

returns the total number of pools created


### pool
```solidity
  function pool(
    address token
  ) external returns (address)
```

given an address, returns the address of the underlying pool

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | the address of the underlying ERC-20 token

### setOwner
```solidity
  function setOwner(
    address o
  ) external
```

sets the owner of the factory

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`o` | address | the new owner

### owner
```solidity
  function owner(
  ) external returns (address)
```

returns the current owner of the factory

## Interface

```solidity
pragma solidity ^0.8.0;

interface ISfpyFactory {
    event PoolCreated(address indexed token, address pool);

    function createPool(address token) external returns (address created);

    function pool(address token) external view returns (address);
    function pools() external view returns (uint256);

    function owner() external view returns (address);
    function setOwner(address) external;
}
```