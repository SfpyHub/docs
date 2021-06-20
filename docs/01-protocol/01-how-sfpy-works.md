---
title: How SFPY Works
id: 01-how-sfpy-works
---

import Link from '@docusaurus/Link'

SFPY is open source infrastructure for accepting payments through ETH and any ERC-20 token with the added benefit of _earning_ fees rather than _paying_ them. The protocol is implemented and deployed as a series of smart contracts on the Ethereum blockchain. This allows any individual, business or institution to start accepting digital payments immediately and without permission, prioritizing **ownership**, **security** and **censorship resistance**. SFPY is **open-source software** and is licensed under the [MIT](https://en.wikipedia.org/wiki/MIT_License).

Each SFPY smart contract or <Link to="/docs/02-core/02-pools">pool</Link> manages a liqudity pool made up of a single ERC-20 token. Each payment made to a pool will issue corresponding liquidity pool tokens to track pro-rata shares of the total reserve, and can be redeemed for the underlying assets at any time.

Anyone can become a merchant to start accepting payments. Fees are _earned_ by merchants when they maintain liquidity in the corresponding pools with the amount earned distributed amongst all merchants based on their share of pool ownership. The mechansism for how each pool earns fees is explained in the <Link to="/docs/02-core/02-pools">Earning Fees</Link> guide.

Pools act as a common bank, ready to accept token deposits on one side while opening up the pooled tokens to "borrowers" who want access to a potentially abundant source of cheap and programmable liquidity.

SFPY does not charge any fees to accept payments, however in practice the payer, or customer, will have to pay [gas fees](https://www.investopedia.com/terms/g/gas-ethereum.asp) to complete each payment. These gas fees are distributed solely amongst the miners that protect the Ethereum network and SFPY does not profit from these fees in any way.

On the other hand, when traders, borrowers or developers tap into the liquidity held by pools, SFPY will apply a 0.10% fee on top of the borrowed funds when they are returned back to the pool. This functions as a payout to merchants, which is realized when they burn their pool tokens to withdraw their portion of total reserves. This fee can be changed at any point through community led discussions and proposals.

# Further reading

- To see how payments work, visit <Link to="/docs/02-core/01-payments">Payments</Link>
- To see how refunds work, visit <Link to="/docs/02-core/03-refunds">Refunds</Link>
- To see how liquidity pools work, visit <Link to="/docs/02-core/02-pools">Pools</Link>

Ultimately, of course, the SFPY protocol is just smart contract code running on Ethereum. To understand how they work, head over to <Link to="/docs/01-protocol/03-smart-contracts">Smart Contracts</Link>.