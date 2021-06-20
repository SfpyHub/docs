---
title: Withdrawing from a smart contract
id: 03-withdrawing-from-a-smart-contract
---

import Link from '@docusaurus/Link'

Users with liquidity stored in pools can also withdraw their underlying tokens back to their wallets. 

## Using the Router

The easiest way to safely remove liquidity from a pool is to use the <Link to='/docs/06-references/02-periphery/01-router'>router</Link>, which provides simple methods to safely remove liquidity from a pool. If the liquidity is to be removed from an ERC-20 pool, use <Link to='/docs/06-references/02-periphery/01-router#withdraw'>withdraw</Link>. If WETH is involved, use <Link to='/docs/06-references/02-periphery/01-router#withdraweth'>withdrawETH</Link>.

There are also variants of these two methods that can be called by providing an EIP-712 compliant signature. Using this method skips having the approve the router to burn the liquidity thereby saving gas fees. Withdrawing liquidity from an ERC-20 pool using an EIP-712 compliant signature can be accomplished by using <Link to='/docs/06-references/02-periphery/01-router#withdrawwithpermit'>withdrawWithPermit</Link>. If WETH is involved, use <Link to='/docs/06-references/02-periphery/01-router#withdrawethwithpermit'>withdrawETHWithPermit</Link>.
