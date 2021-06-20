---
title: Pool (ERC 20)
id: 03-pool-erc-20
---

## Functions
### _mint
```solidity
  function _mint(
  ) internal
```




### _burn
```solidity
  function _burn(
  ) internal
```




### approve
```solidity
  function approve(
  ) external returns (bool)
```




### transfer
```solidity
  function transfer(
  ) external returns (bool)
```




### transferFrom
```solidity
  function transferFrom(
  ) external returns (bool)
```




### permit
```solidity
  function permit(
  ) external
```




### name
```solidity
  function name(
  ) public returns (string)
```

Returns the name of the token.


### symbol
```solidity
  function symbol(
  ) public returns (string)
```

Returns the symbol of the token, usually a shorter version of the
name.


### decimals
```solidity
  function decimals(
  ) public returns (uint8)
```

Returns the number of decimals used to get its user representation.
For example, if `decimals` equals `2`, a balance of `505` tokens should
be displayed to a user as `5,05` (`505 / 10 ** 2`).

Tokens usually opt for a value of 18, imitating the relationship between
Ether and Wei. This is the value {ERC20} uses, unless this function is
overridden;

NOTE: This information is only used for _display_ purposes: it in
no way affects any of the arithmetic of the contract, including
{IERC20-balanceOf} and {IERC20-transfer}.


### totalSupply
```solidity
  function totalSupply(
  ) public returns (uint256)
```

See {IERC20-totalSupply}.


### balanceOf
```solidity
  function balanceOf(
  ) public returns (uint256)
```

See {IERC20-balanceOf}.


### allowance
```solidity
  function allowance(
  ) public returns (uint256)
```

See {IERC20-allowance}.


### DOMAIN_SEPARATOR
```solidity
  function DOMAIN_SEPARATOR(
  ) external returns (bytes32)
```




### PERMIT_TYPEHASH
```solidity
  function PERMIT_TYPEHASH(
  ) external returns (bytes32)
```




### nonces
```solidity
  function nonces(
  ) external returns (uint256)
```

## Interface

```solidity
pragma solidity ^0.8.0;

interface ISfpyERC20 {
    event Approval(address indexed owner, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);

    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function decimals() external view returns (uint8);
    function totalSupply() external view returns (uint);
    function balanceOf(address owner) external view returns (uint);
    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint value) external returns (bool);
    function transfer(address to, uint value) external returns (bool);
    function transferFrom(address from, address to, uint value) external returns (bool);

    function DOMAIN_SEPARATOR() external view returns (bytes32);
    function PERMIT_TYPEHASH() external view returns (bytes32);
    function nonces(address owner) external view returns (uint);

    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;
}
```