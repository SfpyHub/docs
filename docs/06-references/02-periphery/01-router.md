---
title: Router
id: 01-router
---

## Functions
### constructor
```solidity
  function constructor(
  ) public
```




### receive
```solidity
  function receive(
  ) external
```




### factory
```solidity
  function factory(
  ) external returns (address)
```

returns factory address


### WETH
```solidity
  function WETH(
  ) external returns (address)
```

returns WETH address


### flash
```solidity
  function flash(
    address token,
    uint256 tokenAmount,
    address to,
    address callback,
    uint256 deadline,
    bytes data
  ) external returns (uint256 amount, uint256 liquidity)
```

Accepts payment from `msg.sender` in the requested token
and calls the corresponding smart contract that implements 
the `ISfpyCallback` interface.
If the callee is successful, it mints liquidity to the owner
of the flash app contract

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | the contract address of the token being used
|`tokenAmount` | uint256 | the amount of tokenAmount sent
|`to` | address | the recipient of the minted liquidity. Usually the same address that controls the Flash App
|`callback` | address | the address of the smart contract that implements the `ISfpyCallback` interface
|`deadline` | uint256 | Unix timestamp after which the transaction will revert.
|`data` | bytes | any aribitrary data needed to execute the Flash App

### pay
```solidity
  function pay(
    address token,
    uint256 tokenAmount,
    uint256 rate,
    bytes32 request,
    address to,
    uint256 deadline
  ) external returns (uint256 amount, uint256 liquidity)
```

Sends tokens to a pool designated for a particular address
adds liquidity to an ERC-20 pool. To cover all possible 
scenarios `msg.sender` should have already given the router
an allowance of at least `tokenAmount` on `token`

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | the contract address of the token being used in the payment
|`tokenAmount` | uint256 | the amount of tokenAmount being paid
|`rate` | uint256 | a belief of the value of the token in a fiat currency - the exchange rate
|`request` | bytes32 | an external ID of a payment request
|`to` | address | recipient of the payment.
|`deadline` | uint256 | Unix timestamp after which the transaction will revert.

### refund
```solidity
  function refund(
    address token,
    uint256 tokenAmount,
    bytes32 payment,
    address to,
    uint256 deadline
  ) external returns (uint256 amount, uint256 liquidity)
```

Removes liquidity from an ERC-20 pool and sends the underlying  
tokens to the recipient. To cover all possible 
scenarios `msg.sender` should have already given the router
an allowance of at least the required liquidity to burn

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | the contract address of the token being used in the payment
|`tokenAmount` | uint256 | the amount of tokenAmount being paid
|`payment` | bytes32 | an external ID of a payment
|`to` | address | recipient of the payment.
|`deadline` | uint256 | Unix timestamp after which the transaction will revert.

### payETH
```solidity
  function payETH(
    bytes32 request,
    address to,
    uint256 rate,
    uint256 deadline
  ) external returns (uint256 amount, uint256 liquidity)
```

Sends tokens to a pool designated for a particular address
when a payment needs to be made using ETH.
Adds liquidity to a WETH pool. 
`msg.value` is treated as the amount of ETH being paid.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`request` | bytes32 | an external ID of a payment request
|`to` | address | recipient of the payment.
|`rate` | uint256 | a belief of the value of ETH in a fiat currency - the exchange rate
|`deadline` | uint256 | Unix timestamp after which the transaction will revert.

### refundETH
```solidity
  function refundETH(
    bytes32 payment,
    uint256 tokenAmount,
    address to,
    uint256 deadline
  ) external returns (uint256 amount, uint256 liquidity)
```

Removes liquidity from a WETH pool and sends the underlying  
ETH to the recipient.
To cover all possible scenarios `msg.sender` should have already given the router
an allowance of at least the required liquidity to burn

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`payment` | bytes32 | an external ID of a payment
|`tokenAmount` | uint256 | the amount of tokenAmount being paid
|`to` | address | recipient of the payment.
|`deadline` | uint256 | Unix timestamp after which the transaction will revert.

### withdraw
```solidity
  function withdraw(
    address token,
    uint256 liquidity,
    uint256 amountMin,
    address to,
    uint256 deadline
  ) public returns (uint256 amount)
```

Removes liquidity from an ERC-20 pool and converts liquidity
into the underlying token which is sent to the recipient

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | the contract address of the desired token.
|`liquidity` | uint256 | the amount of liquidity tokens to remove.
|`amountMin` | uint256 | the minimum amount of token that must be received for the transaction not to revert.
|`to` | address | recipient of the underlying assets.
|`deadline` | uint256 | Unix timestamp after which the transaction will revert.

### withdrawETH
```solidity
  function withdrawETH(
    uint256 liquidity,
    uint256 amountMin,
    address to,
    uint256 deadline
  ) public returns (uint256 amount)
```

Removes liquidity from a WETH pool and converts liquidity
into ETH which is sent to the recipient

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`liquidity` | uint256 | the amount of liquidity tokens to remove.
|`amountMin` | uint256 | the minimum amount of token that must be received for the transaction not to revert.
|`to` | address | recipient of the underlying assets.
|`deadline` | uint256 | Unix timestamp after which the transaction will revert.

### refundWithPermit
```solidity
  function refundWithPermit(
    address token,
    uint256 tokenAmount,
    bytes32 payment,
    address to,
    uint256 deadline,
    bool approveMax,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external returns (uint256 amount)
```

Removes liquidity from an ERC-20 pool and sends the underlying  
tokens to the recipient, without pre-approval using EIP 712 signatures

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | the contract address of the token being used in the payment
|`tokenAmount` | uint256 | the amount of tokenAmount being refunded
|`payment` | bytes32 | an external ID of a payment
|`to` | address | recipient of the payment.
|`deadline` | uint256 | Unix timestamp after which the transaction will revert.
|`approveMax` | bool | Whether or not the approval amount in the signature is for liquidity or 2**256
|`v` | uint8 | The v component of the permit signature.
|`r` | bytes32 | The r component of the permit signature.
|`s` | bytes32 | The s component of the permit signature.

### withdrawWithPermit
```solidity
  function withdrawWithPermit(
    address token,
    uint256 liquidity,
    uint256 amountMin,
    address to,
    uint256 deadline,
    bool approveMax,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external returns (uint256 amount)
```

Removes liquidity from an ERC-20 pool and converts liquidity
into the underlying token, without pre-approval using EIP 712 signatures

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | the contract address of the desired token.
|`liquidity` | uint256 | the amount of liquidity tokens to remove.
|`amountMin` | uint256 | the minimum amount of token that must be received for the transaction not to revert.
|`to` | address | recipient of the underlying assets.
|`deadline` | uint256 | Unix timestamp after which the transaction will revert.
|`approveMax` | bool | Whether or not the approval amount in the signature is for liquidity or 2**256
|`v` | uint8 | The v component of the permit signature.
|`r` | bytes32 | The r component of the permit signature.
|`s` | bytes32 | The s component of the permit signature.

### withdrawETHWithPermit
```solidity
  function withdrawETHWithPermit(
    uint256 liquidity,
    uint256 amountMin,
    address to,
    uint256 deadline,
    bool approveMax,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external returns (uint256 amount)
```

Removes liquidity from a WETH pool and converts liquidity
into ETH, without pre-approval using EIP 712 signatures

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`liquidity` | uint256 | the amount of liquidity tokens to remove.
|`amountMin` | uint256 | the minimum amount of token that must be received for the transaction not to revert.
|`to` | address | recipient of the underlying assets.
|`deadline` | uint256 | Unix timestamp after which the transaction will revert.
|`approveMax` | bool | Whether or not the approval amount in the signature is for liquidity or 2**256
|`v` | uint8 | The v component of the permit signature.
|`r` | bytes32 | The r component of the permit signature.
|`s` | bytes32 | The s component of the permit signature.

### refundETHWithPermit
```solidity
  function refundETHWithPermit(
    bytes32 tokenAmount,
    uint256 payment,
    address to,
    uint256 deadline,
    bool approveMax,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external returns (uint256 amount)
```

Removes liquidity from a WETH pool and sends the underlying  
ETH to the recipient, without pre-approval using EIP 712 signatures

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenAmount` | bytes32 | the amount of tokenAmount being refunded
|`payment` | uint256 | an external ID of a payment
|`to` | address | recipient of the payment.
|`deadline` | uint256 | Unix timestamp after which the transaction will revert.
|`approveMax` | bool | Whether or not the approval amount in the signature is for liquidity or 2**256
|`v` | uint8 | The v component of the permit signature.
|`r` | bytes32 | The r component of the permit signature.
|`s` | bytes32 | The s component of the permit signature.


## Interface

```solidity
interface ISfpyRouter {
    event Pay(
        address indexed from,
        address indexed to,
        address indexed token,
        bytes32 request,
        uint256 amount,
        uint256 rate
    );

    event Refund(
        address indexed from, 
        address indexed to, 
        address indexed token, 
        bytes32 payment, 
        uint256 amount
    );

    event Flash(
        address indexed from, 
        address indexed to,
        address indexed token,
        address callback,
        uint256 amount
    );

    function factory() external view returns (address);
    function WETH() external view returns (address);

    function flash(
        address token,
        uint256 tokenAmount,
        address to,
        address callback,
        uint256 deadline,
        bytes calldata data
    ) external returns (uint256 amount, uint256 liquidity);

    function pay(
        address token,
        uint256 tokenAmount,
        uint256 rate,
        bytes32 request,
        address to,
        uint256 deadline
    ) external returns (uint256 amount, uint256 liquidity);

    function refund(
        address token,
        uint256 tokenAmount,
        bytes32 payment,
        address to,
        uint256 deadline
    ) external returns (uint256 amount, uint256 liquidity);

    function payETH(
        bytes32 request,
        address to,
        uint256 rate,
        uint256 deadline
    ) external payable returns (uint256 amount, uint256 liquidity);

    function refundETH(
        bytes32 payment,
        uint256 tokenAmount,
        address to,
        uint256 deadline
    ) external returns (uint256 amount, uint256 liquidity);

    function withdraw(
        address token,
        uint256 liquidity,
        uint256 amountMin,
        address to,
        uint256 deadline
    ) external returns (uint256 amount);

    function withdrawWithPermit(
        address token,
        uint256 liquidity,
        uint256 amountMin,
        address to,
        uint256 deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint256 amount);

    function refundWithPermit(
        address token,
        uint256 tokenAmount,
        bytes32 payment,
        address to,
        uint256 deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint256 amount);

    function withdrawETH(
        uint256 liquidity,
        uint256 amountMin,
        address to,
        uint256 deadline
    ) external returns (uint256 amount);

    function withdrawETHWithPermit(
        uint256 liquidity,
        uint256 amountMin,
        address to,
        uint256 deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint256 amount);

    function refundETHWithPermit(
        bytes32 payment,
        uint256 tokenAmount,
        address to,
        uint256 deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint256 amount);
}
```