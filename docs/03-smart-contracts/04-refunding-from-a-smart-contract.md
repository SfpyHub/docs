---
title: Refunding from a smart contract
id: 04-refunding-from-a-smart-contract
---

import Link from '@docusaurus/Link'

Refunding from smart contracts is pretty much the reverse of making a payemnt through a smart contract. As we learned in <Link to='/docs/03-smart-contracts/02-paying-from-a-smart-contract'>Paying from a smart contract</Link>, it's very important to have an access to an external price source. Without this, you can either pay too much or too less resulting in complications when dealing with your customer.

## Using the Router

The easiest way to safely refund a payment using tokens is to use the <Link to='/docs/06-references/02-periphery/01-router'>router</Link>, which provides a variety of methods to safely refund from different assets. You'll notice that there is a function for each permutation of refunding an exact amount of ETH/tokens.

First you must use an external price source to calculate the exchange rate of the token to the amount that you wish to refund. We recommed using Compounds Open Price feed to calculate the current on-chain price of tokens to USD. You can learn more by reading Compound's documentation on their [Open price feed](https://compound.finance/open-price).

You must also ensure that you have sufficient liquidity in your pool of choicee to make the refund.

## Example

Imagine you want to make a refund of USD 5000 in WETH from your smart contract back to your customer.

### price

Before executing the refund, first use an external price source like Compound's open price feed to get the current exchange rate for WETH/USD by calling their function

```solidity
function price(string symbol);
```

### refund

Now we're ready to refund:

```solidity
SfpyRouter.refund(
    amountIn, 
    amountOutMin, 
    path, 
    msg.sender, 
    block.timestamp
);
```

## Safety considerations

Because the onous to refund the correct number of tokens is on the merchant (payer), to ensure that there are no misunderstandings between you and your customer, we recommend that you calculate the amount of tokens required to be refunded _before_ you send them. Obviously, payers are free to pay any amount with any token, however, payees might not be satisfied with the amount paid or the token used. 

For example if the original payment from the previous example of USD 5000 needs to be refunded, and the current exchange rate has fluctuated from USD 2500 to USD 2000, in favor of WETH, the customer would expect to be sent 2.5 WETH from the merchant (in the case of a full refund). However, if the merchant only sends 2 WETH, the customer may not be satisfied.

The best way to protect against these attacks is to use an external price feed or "price oracle". The best "oracle" is simply _traders' off-chain observation of the current price_, which can be passed into the payment.

The S2 interface automatically does this for you by pulling the current exchange rate between USD and a variety of ERC-20 tokens and ETH. Hence we recommend that for a seamless experience, most merchants should use our open source interface. You can read more by visiting [Making a refund](/docs/04-interface/04-refunding-a-payment).