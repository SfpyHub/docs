---
title: Refunds
id: 03-refunds
---

# Introduction

SFPY brings the familiar concept of refunds to smart-contracts for merchants. In a nutshell, a refund involves the return of ETH or ERC-20 tokens from a merchant back to their customer. 

While on the surface, refunds on SFPY seem very familiar to the end-user, this guide will attempt to explain how refunds work at the protocol level and highlight the few nuances that are important to understand.

As we saw in [Payments](/docs/02-core/01-payments), customers send ERC-20 tokens to a pool instead of directly to the merchant's wallet. This means that when merchants wish to return all or some of those tokens back to their customer, they can do so _as long as they have the required amount of tokens in the pool_. If the required number of tokens are not available, merchants can always talk to their customers to find another way to make the refund, but for most use-cases, merchant _should_ have enough balance in their pools to make one-off refunds.

## Anatomy of a refund

At the most basic level, all refunds in SFPY happen within a single function call
```solidity
function refund(bytes32 request, uint256 tokenAmount, address token, uint256 rate);
```

As is evident by the function signature, the amount to refund is arbitrary as is the token being used to make the payment. This allows certain pros but also opens up certain cons.

### Pros

- Merchants can conduct full or partial refunds by using any amount they wish to enter. We expect merchants will not choose an amount more than the paid amount although they are certainly free to do so.

- If the original exchange rate at the time of payment has appreciated in favor of the token, merchants can refund the same _fiat_ value back to the customer if they wish to do so

### Cons

- Merhchants are free to choose any currency to make the refund with. This may not be a currency the customer is comfortable with or choose to keep.

- Relies on a certain level of trust for merchants to refund an appropriate amount to satisfy the customer. There is a risk that the merchant does not refund the customer at all or refunds a disproportionately small amount compared to the original payment.

## Refunding tokens

When executing a refund, merchants must have the equivalent amount of liquidity available in one of the pools they wish to make the refund from. This is where the nuance comes in that is important to understand. With normal ERC-20 tokens, one would expect the refund to almost be a reverse of a payment - tokens are sent from the merchant back to the customer. However, because SFPY introduces the concept of fee-earning liquidity pools, refunds are made by _burning_ a merchant's liquidity from one of the pools to obtain the required number of _underlying_ tokens. These tokens are then transferred to the customer's self-hosted wallet.

## Developer resources

- To see how to implement refunds in a smart contract read [Refunding from a smart contract](/docs/03-smart-contracts/04-refunding-from-a-smart-contract)
- To see how to manage refunds from the web interface, read [Refunding a payment](/docs/04-interface/04-refunding-a-payment)



