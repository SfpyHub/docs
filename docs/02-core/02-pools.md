---
title: Pools
id: 02-pools
---

# Introduction

Each SFPY liquidity pool acts like a bank for a single ERC20 tokens. When a pool contract is created, its balances of the underlying token is 0; in order for the pool to begin holding reserves and providing liquidity, someone must seed it with an initial deposit of a token through a payment. Merchants can then withdraw the underlying tokens and claim their payment by burning their pool tokens or can maintain their balance in the pool to earn passive income by lending out the pool reserves to borrowers.

# Pool tokens

Whenever a payment is made to a pool, unique tokens known as _liquidity tokens_ are minted and sent to the merchant's address. These tokens represent a given merchant's ownership of a pool. The proportion of the pool's liquidity provided determines the number of liquidity tokens the merchant receives. If the payment is the first payment made to a pool, the number of liquidity tokens the merchant will receive will equal `sqrt(x)`, where `x` represents the amount of the token provided.

To retrieve the underlying liquidity, plus any fees accrued, merchants must “burn” their liquidity tokens, effectively exchanging them for their portion of the liquidity pool, plus the proportional fee allocation.

Merchants also have the option of refunding the payment back to their customers. Refunds operate on the liquidity tokens merchants have accrued so far by burning the required amount needed to come up with the original number of tokens that were paid. Once these liquidity tokens are burnt, the underlying tokens are sent to the customer.

As liquidity tokens are themselves tradable assets, merchants may sell, transfer, or otherwise use their liquidity tokens in any way they see fit.