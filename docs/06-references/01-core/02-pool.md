---
title: Pool
id: 02-pool
---

## Functions
### getReserves
```solidity
  function getReserves(
  ) public returns (uint112 _reserve, uint32 _blockTimestampLast)
```

Get the pool's balance of token


### initialize
```solidity
  function initialize(
  ) external
```




### liquidityToBurn
```solidity
  function liquidityToBurn(
    uint256 amount
  ) public returns (uint256 liquidity)
```

calculates the amount of liquidity tokens needed to be burnt
given an amount of the underlying token

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | the amount of ERC-20 tokens that is needed

### mint
```solidity
  function mint(
    address to
  ) external returns (uint256 liquidity)
```

mints liquidity tokens pro rata based on the amount of the 
underlying ERC-20 token that was transferred to the pool

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`to` | address | the address to mint the liquidity tokens to

### burn
```solidity
  function burn(
    address to
  ) external returns (uint256 amount)
```

converts pool liquidity tokens into underlying ERC-20 tokens
and sends them to the address specified

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`to` | address | the address to send the underlying tokens to

### borrow
```solidity
  function borrow(
    uint256 amountOut,
    address to,
    bytes data
  ) external
```

Borrows funds from the pool 

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountOut` | uint256 | the amount requested
|`to` | address | the address to send the funds to
|`data` | bytes | any data that might be needed during call execution

### factory
```solidity
  function factory(
  ) external returns (address)
```

returns the address of the factory


### token
```solidity
  function token(
  ) external returns (address)
```

returns the underlying ERC-20 token of this pool


## Events
### Mint
```solidity
  event Mint(
  )
```



### Burn
```solidity
  event Burn(
  )
```



### Sync
```solidity
  event Sync(
  )
```

## Interface

```solidity
pragma solidity ^0.8.0;

interface ISfpyPool {
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event Transfer(address indexed from, address indexed to, uint256 value);
    
    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function decimals() external view returns (uint8);
    function totalSupply() external view returns (uint256);
    function balanceOf(address owner) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 value) external returns (bool);
    function transfer(address to, uint256 value) external returns (bool);
    function nonces(address owner) external view returns (uint256);
    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool);
    function permit(
        address owner,
        address spender,
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;

    event Mint(address indexed owner, uint256 amount);
    event Burn(address indexed owner, uint256 amount, address indexed to);
    event Sync(uint112 reserve);

    function factory() external view returns (address);
    function token() external view returns (address);
    function getReserves() external view returns (uint112 reserve, uint32 blockTimestampLast);
    function liquidityToBurn(uint256 amount) external view returns (uint256 liquidity);
    function mint(address to) external returns (uint256 liquidity);
    function burn(address to) external returns (uint256 amount);
    function borrow(uint256 amountOut, address to, bytes calldata data) external;
    function initialize(address) external;
}
```