---
title: Quick start
id: 01-quick-start
---

Developing smart contracts for Ethereum that integrate with SFPY involves a bevy of off-chain tools used for producing and testing bytecode 
that runs on the [Ethereum Virtual Machine (EVM)](https://eth.wiki/en/concepts/evm/ethereum-virtual-machine-(evm)-awesome-list).
Some tools also include workflows for deploying this bytecode to the Ethereum network and testnets.
There are many options for these tools. This guide walks you through writing and testing a simple smart contract that
interacts with the SFPY Protocol using one specific set of tools (`truffle` + `npm` + `mocha`).

## Requirements

To follow this guide, you must have the following installed:

- [nodejs >= v12.x & npm >= 6.x](https://nodejs.org/en/)

## Bootstrapping a project

You can start from scratch, but it's easier to use a tool like `truffle` to bootstrap an empty project. 
Create an empty directory and run `npx truffle init` inside that directory to unbox the default 
[Truffle box](https://www.trufflesuite.com/boxes).

```shell script
mkdir demo
cd demo
npx truffle init
```

## Setting up npm

In order to reference the SFPY contracts, you should use the npm artifacts we deploy containing the core and
periphery smart contracts and interfaces. To add npm dependencies, we first initialize the npm package. 
We can run `npm init` in the same directory to create a `package.json` file. You can accept all the defaults and
change it later.

```shell script
npm init
```

## Adding dependencies

Now that we have an npm package, we can add our dependencies. Let's add both the 
[`@sfpy/core`](https://www.npmjs.com/package/@sfpy/core) and 
[`@sfpy/periphery`](https://www.npmjs.com/package/@sfpy/periphery) packages.

```shell script
npm i --save @sfpy/core
npm i --save @sfpy/periphery
```

If you check the `node_modules/@sfpy` directory, you can now find the SFPY contracts. 

```shell script
zp@macbook-air ~/demo> ls node_modules/@sfpy/core/contracts
ERC20.sol        SfpyPool.sol     libraries/
SfpyFactory.sol  interfaces/     test/
zp@macbook-air ~/demo> ls node_modules/@sfpy/periphery/contracts/
examples/       test/
SfpyRouter.sol  interfaces/
libraries/
```

These packages include both the smart contract source code and the build artifacts.

## Writing our contract

We can now get started writing our example contract. 
For writing Solidity, we recommend IntelliJ or VSCode with a solidity plugin, but you can use any text editor.
Let's write a contract that returns the value of some amount of liquidity share for a given token pool. 
First create a couple of files:

```shell script
mkdir contracts/interfaces
touch contracts/interfaces/ILiquidityValueCalculator.sol
touch contracts/LiquidityValueCalculator.sol
``` 

This will be the interface of the contract we implement. Put it in `contracts/interfaces/ILiquidityValueCalculator.sol`.

```solidity
pragma solidity ^0.6.6;

interface ILiquidityValueCalculator {
    function computeLiquidityShareValue(uint256 liquidity, address token) external returns (uint256 tokenAmount);
}
```

Now let's start with the constructor. You need to know where the `SfpyFactory` is deployed in order to compute the
address of the pool and look up the total supply of liquidity share, plus the amount for the reserve. 
We can store this as an address passed to the constructor.

The factory address is constant on mainnet and all testnets, so it may be tempting to make this value a constant in your contract,
but since we need to unit test the contract it should be an argument. You can use solidity immutables to save on gas
when accessing this variable.

```solidity
pragma solidity ^0.6.6;

import './interfaces/ILiquidityValueCalculator.sol';

contract LiquidityValueCalculator is ILiquidityValueCalculator {
    address public factory;
    constructor(address factory_) public {
        factory = factory_;
    }
}
```

Now we need to be able to look up the total supply of liquidity for a pool, and its token balance. 
Let's put this in a separate function. To implement it, we must:

1. Look up the pool address
2. Get the reserve of the pool
3. Get the total supply of the pool liquidity

The [`SfpyLibrary`](/docs/06-references/02-periphery/03-library/) has some helpful methods for this.

```solidity
pragma solidity ^0.6.6;

import './interfaces/ILiquidityValueCalculator.sol';
import '@sfpy/periphery/contracts/libraries/SfpyLibrary.sol';
import '@sfpy/contracts/interfaces/ISfpyPool.sol';

contract LiquidityValueCalculator is ILiquidityValueCalculator {
    function poolInfo(address token) internal view returns (uint256 reserve, uint256 totalSupply) {
        ISfpyPool pool = ISfpyPool(SfpyLibrary.poolFor(factory, token));
        totalSupply = pool.totalSupply();
        (uint256 reserve,) = pool.getReserves();
    } 
}
```

Finally we just need to compute the share value. We will leave that as an exercise to the reader.

```solidity
pragma solidity ^0.6.6;

import './interfaces/ILiquidityValueCalculator.sol';
import '@sfpy/periphery/contracts/libraries/SfpyLibrary.sol';
import '@sfpy/core/contracts/interfaces/SfpyPool.sol';

contract LiquidityValueCalculator is ILiquidityValueCalculator {
    address public factory;
    constructor(address factory_) public {
        factory = factory_;
    }

    function poolInfo(address token) internal view returns (uint256 reserve, uint256 totalSupply) {
        ISfpyPool pool = ISfpyPool(SfpyLibrary.poolFor(factory, token));
        totalSupply = pool.totalSupply();
        (uint256 reserve,) = pool.getReserves();
    }
 
    function computeLiquidityShareValue(uint256 liquidity, address token) external override returns (uint256 tokenAAmount) {
        revert('TODO');
    }
}
``` 

## Writing tests

In order to test your contract, you need to:

1. Bring up a testnet
2. Deploy the `SfpyFactory`
3. Deploy at least 1 ERC20 token for the pool
4. Create a pool for the factory
5. Deploy your `LiquidityValueCalculator` contract
6. Call `LiquidityValueCalculator#computeLiquidityShareValue`
7. Verify the result with an assertion

\#1 is handled for you automatically by the `truffle test` command.

Note you should only deploy the precompiled Uniswap contracts in the `build` directories for unit tests. 
This is because solidity appends a metadata hash to compiled contract artifacts which includes the hash of the contract
source code path, and compilations on other machines will not result in the exact same bytecode.
This is problematic because in SFPY we use the hash of the bytecode in the periphery
[`SfpyLibrary`](https://github.com/sfpyhub/sfpy-periphery/blob/main/contracts/libraries/SfpyLibrary.sol),
to compute the pair address.

To get the bytecode for deploying SfpyFactory, you can import the file via:

```javascript
const SfpyFactoryBytecode = require('@sfpy/core/build/SfpyFactory.json').bytecode
```

If you're using [ethers.js](https://docs.ethers.io/v5/), an example deploy of `SfpyFactory` would look like:

```javascript
const SfpyFactoryBytecode = require('@sfpy/core/build/SfpyFactory.json').bytecode;

const SfpyLibrary = await ethers.getContractFactory(
  [
    "constructor(address _feeToSetter)",
    "function createPool(address token) external returns (address pool)",
  ],
  SfpyFactoryBytecode
);
const [owner] = await ethers.getSigners();
const sfpyLibrary = await SfpyLibrary.deploy(owner.address);
```

We recommend using a standard ERC20 from `@openzeppelin/contracts` for deploying an ERC20.



## Compiling and deploying the contract

Learn more about compiling and deploying contracts using Truffle 
[here](https://www.trufflesuite.com/docs/truffle/getting-started/compiling-contracts) and
[here](https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations) respectively.

## WIP

This guide is a WIP. Please contribute to this guide with the edit button below!
