---
title: Smart Contracts
id: 03-smart-contracts
---

SFPY is a binary smart contract system heavily inspired by Uniswap V2. [Core](#core) contracts provide fundamental safety guarantees for all parties interacting with SFPY. [Periphery](#periphery) contracts interact with one or more core contracts but are not themselves part of the core.

# Core

[Source code](https://github.com/sfpyhub/sfpy-core)

The core consists of a singleton [factory](#factory) and many [pools](#pools), which the factory is responsible for creating and indexing. These contracts are quite minimal, even brutalist. The simple rationale for this is that contracts with a smaller surface area are easier to reason about, less bug-prone, and more functionally elegant. Perhaps the biggest upside of this design is that many desired properties of the system can be asserted directly in the code, leaving little room for error. One downside, however, is that core contracts are somewhat user-unfriendly. In fact, interacting directly with these contracts is not recommended for most use cases. Instead, a periphery contract should be used.

## Factory

The factory holds the generic bytecode responsible for powering pairs. Its primary job is to create one and only one smart contract per unique token pool. Currently pool creation is controlled by the deployer of the factory smart contract. The reasoning behind this was to initially enable only vetted, secure tokens to be accepted as payments while simulataneously avoiding the risk of merchants being paid for their goods and services through bogus ERC-20 tokens. The decisions to include new pools will be made through Governance and community discussions.

## Pools

Pools have two primary purposes: serving as liquidity for flash loans and keeping track of pool token balances.

# Periphery

[Source code](https://github.com/sfpyhub/sfpy-periphery)

The periphery is a constellation of smart contracts designed to support domain-specific interactions with the core. Because of SFPY's permissionless nature, the contracts described below have no special privileges, and are in fact only a small subset of the universe of possible periphery-like contracts. However, they are useful examples of how to safely and efficiently interact with SFPY.

## Router

The router, which uses the library, fully supports all the basic requirements of a front-end offering payment, withdraw and refund functionality. This contract is the easiest place to start interacting with for a smart contract developer.
