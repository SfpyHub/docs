---
title: Flash Loans
id: 04-flash-loans
---

# Introduction

Flash loans in SFPY allow you to take an arbitrarily large, collateral free, loan from any available pool with sufficient liquidity and execute any logic, provided that by the end of the transaction you either:

- revert the transaction and return the original amount of tokens borrowed
- return the withdrawn ERC-20 token along with a small fee

Flash loans are incredibly useful because they provide an almost unlimited line of capital for traders and arbitrageurs at no upfront cost, while also providing a source of revenue for merchants who have pooled together their received payments.

## Example

### Collateral free arbitrage

Part of what makes SFPY different from other payment services is the opportunity for merchants to _earn_ fees rather than _pay_ them. This is achieved by traders and arbitraguers who need access to cheap capital in order to exploit token mispricings on other DeFi exchanges for profit.

Imagine a scenario where the cost of buying 1 ETH on Balancer is 200 DAI, and on Oasis (or any other trading venue), 1 ETH buys 220 DAI. To anyone with 200 DAI available, this situation represents a risk-free profit of 20 DAI. Unfortunately, you may not have 200 DAI lying around. With flash loans, however, this risk-free profit is available for anyone to take as long as they're able to pay gas fees.

### Withdrawing ETH from SFPY

The first step is to _optimistically_ withdraw 1 ETH from SFPY via a flash loan. This will serve as the capital that we use to execute our arbitrage. Note that in this scenario, we're assuming that:

- 1 ETH is the pre-calculated profit-maximizing trade
- The price has not changed on Balancer or Oasis since our calculation

### Trade at External Venue

Once we've obtained our temporary capital of 1 ETH from SFPY, we now can trade this for 220 DAI on Oasis. Once we've received the DAI, we need to pay SFPY back. We've mentioned that the amount required to cover 1 ETH is 200 DAI, on Balancer. So, after sending 200 of the DAI back to Balancer in exchange for 1 ETH and then returning the 1 ETH back to SFPY, you're left with 20 DAI of profit!

### Aborting the transaction

At any point during the lifetime of the transaction, the caller is free to abort or revert the entire transaction. Consider the situation where a precomputed arbitrage opportunity no longer exists because another trader was able to capitalize on it before you were able to reach the end of your transaction. In this case it may no longer be profotable to execute the arbitrage. For instance if at one point in your logic you calculated the price of ETH to DAI as 220 but later on recalculated it to be 190. At this point, DAI is more expensive than what you actually exchanged it for, and its no longer profitable to carry on with the trader. At this point, developers can simply call `revert`. This will reverse all execution and return the borrowed ETH back to SFPY. The developer/trader will only have to pay gas fees.

# Developer resources

- To see how to integrate a flash loan in your smart contract read [Using Flash Loans](/docs/03-smart-contracts/05-using-flash-loans/).