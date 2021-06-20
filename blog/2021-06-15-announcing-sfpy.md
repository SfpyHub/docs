---
slug: announcing-sfpy
title: Announcing SFPY
author: Ziyad Parekh
author_url: https://github.com/ziyadparekh
tags: [sfpy, announcement]
---

import Link from '@docusaurus/Link'
import blogImg from '../static/img/blog-img-1.png';

## Prologue

When we started [Safepay](https://getsafepay.pk) in 2019 our mission was, and still is, to enable Pakistani businesses of all sizes to accept digital payments online. We've come a long way since the early days of only accepting credit and debit cards and by working with various financial institutions in the country, we are now able to allow our businesses to process multiple payment methods, both local and international.

But as we delved deeper to understand how money actually moves within the interconnected superhighways of the traditional financial world, we discovered a world of staggering complexity. Overwhelmed, we decided to follow the age old advice when dealing with flows of funds: ***follow the money.***

What we found was pretty eye opening - the current financial industry that caters to merchants wishing to accept payments online suffers from a very major bias. The graphic below is based on a report released by the Federal Reserve Bank of Philadelphia a few years back, but is still very relevant today.

<img src={blogImg} alt="revenue-breakdown-per-merchant-size" />

The pyramid on the left has merchants who accept credit and debit cards grouped by size. The inverted pyramid in the middle represents the amount of money they process. The pyramid on the right is the net revenue which the credit card industry makes. In short, small businesses pay ***forty-five times*** more than larger companies do. Not only that, smaller businesses are forced to accept terms that are designed to be ambigious and in the long term, hinder their growth. The most striking part is that there is a whole group of merchants that are left out, without permission to accept digital payments either because of bad credit, small volumes or lack of interest from acquirers to facilitate them.

While we're still working hard to help businesses in Pakistan accept digital payments online, our allowed jurisdiction is limited geographically. But we knew this problem exists for merchants in other countries as well. That is when we decided to take a more serious look at Ethereum and the blossoming DeFi movement. Ethereum, and distributed ledgers, are unique in many ways, but to us the value lay in two main areas: 
- Permissionless: Anyone can join the network and conduct commerce as and when they choose.
- Ownership: Participants are in control of their financial wealth and assets as opposed to having a "trusted" third party be custodians of their funds.

The second point is very important because trust is fragile and only remains while it's there. The consequence of losing trust (by either parties) in the context of financial transactions can be quite severe.

So we went down a second rabbit hole, this time entering the world of smart contracts, immutable code, flash loans and tokenomics. The end result is something I'm very happy to share today.

## Introducing SFPY

SFPY is the next iteration of Safepay - a way for businesses to accept payments in *digital tokens* - that closes the gap we were facing in facilitating small businnesses. We wanted to reimagine how accepting payments would look like from a merchants perspective and ended up flipping the entire model on its head.

To learn more about how SFPY works, please refer to our <Link to="/docs/">Getting started guide</Link>, but read along for a brief overview if you're interested.

At a high level, SFPY allows merchants to accept digital tokens (ERC-20) and Ethereum as payment currencies from their customers *without* any fees (gas fees still applicable). Not only can they do so for free, the funds that they receive from customers are transformed into an asset class on which they can actually *earn* fees as revenue.

This is achieved through liquidity pools that aggregate funds across all merchants using SFPY, and expose an opening for *traders* to access collateral-free margin through flash loans.

- To learn how to accept payments as a merchant, you can read our explanation on <Link to="/docs/02-core/01-payments">Payments</Link>.
- To learn how fee earning liquidity pools work, you can read our explanation on <Link to="/docs/02-core/02-pools">Pools</Link>

The nice side-effect of building on Ethereum is that we at no point control any funds. Said in another way, merchants are in complete control of their hard earned revenue. At any point in time, they can choose to withdraw their outstanding liquidity to their own wallets without any complicated settlement schedules, additional fees and most of all *permission*.

Our aim is to provide merchants with a similar experience of accepting payments that they would be used to in terms of plugins for various e-commerce platforms, <Link to="/docs/05-api/01-authentication">APIs</Link> for custom integrations, [SDKs](https://github.com/sfpyhub/web3-sdk) for simplifying the integration process and an [open source interface](https://github.com/sfpyhub/interface) to manage their payments and refunds from.

## Apps

Flash Loans are very easily accessible through a neat interface:

```solidity
function borrow(address sender, uint256 amount, bytes calldata data)
```

More details can be found in the <Link to="/docs/02-core/04-flash-loans">Flash Loans</Link> guide and <Link to="/docs/06-references/01-core/04-borrower">Borrower Reference</Link>.

The concept of "triggering" a smart contract by conforming to an interface led us to think about a *new* interface with a different use case. What if you could trigger an entire suite of smart contracts after a payment has been made? Developers that are interested in selling items online (NFTs, subscriptions, physical goods etc), raising funds through ICOs or even things we haven't thought about yet, can all do so now without having to worry about the payment acceptance side. This is now neatly encapsulated in the `afterPay` callback:

```solidity
  function afterPay(address sender, address token, uint256 amount, bytes calldata data) external
```

The basic idea is as follows: After a customer has transferred the required tokens into the pool but *before* any liquidity tokens are minted for the merchant, the smart contract triggers the function described above. This calls the developer's smart contracts through which they can decide whether the customer has paid enough, paid with an acceptable token and any additional business logic they deem necessary before transfering the purchased item to the customer. Most importantly, the developer can revert the entire transaction at any point returning all funds back to the customer if they choose to abort the transaction.

Flash Apps are very early in development and quite frankly are risky at the moment. Customers interacting with Flash Apps, should be absolutely certain that they *trust* the code written before making a payment since any nefarious actor can take the funds without actually honoring the purchase (although this problem exists in traditional finance as well).

However, we see Flash Apps evolving into a marketplace or App Store of sorts where the community hand picks their favorite apps and lists them under a common standard. This way, customers have more confidence in picking the apps they wish to interact with.

While this is still in early development, you can read more about how to use Flash Apps over <Link to="/docs/02-core/05-flash-apps">here</Link>.

## Epilogue

We're very interested with working with developers, businesses, and the wider community in general to build the future of payments on Web 3.0. While it's still early, SFPY is available to use today in a `beta` phase. We would appreciate any feedback you have!

- <Link to="/docs/06-references/01-deployment-addresses">Deployment Addresses</Link>
- [Use the App](https://app.sfpy.co)
- <Link to="/docs/05-api/01-authentication">API Reference</Link>
- [Discord](https://discord.gg/PQffzU78Fx)


