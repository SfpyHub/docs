---
title: Paying from a smart contract
id: 02-paying-from-a-smart-contract
---

import Link from '@docusaurus/Link'

When making a payment from a smart contract, the most important thing to keep in mind is that access to an external price source is _recommended_. Without this, you can either pay too much or too less resulting in complications when dealing with merchant.

## Using the Router

The easiest way to safely pay using tokens is to use the <Link to='/docs/06-references/02-periphery/01-router'>router</Link>, which provides a variety of methods to safely pay from different assets. You'll notice that there is a function for each permutation of paying from an exact amount of ETH/tokens.

First you must use an external price source to calculate the exchange rate of the token to the amount of the payment. We recommed using Compounds Open Price feed to calculate the current on-chain price of tokens to USD. You can learn more by reading Compound's documentation on their [Open price feed](https://compound.finance/open-price).

It is also important to ensure that your contract controls enough ETH/tokens to make the payment, and has granted approval to the router to withdraw this many tokens.

## Example

Imagine you want to make a payment of USD 5000 in WETH from your smart contract.

### price

Before paying, first use an external price source like Compound's open price feed to get the current exchange rate for WETH/USD by calling their function

```solidity
function price(string symbol);
```

### transferFrom
 
After calculating the exchange rate and subsequently the correct amount of tokens to pay, you must transfer these tokens to our smart contracts so that they are in control of the tokens. 

For instance, if the exchange rate at the time of payment is USD 2500 per 1 WETH, then the WETH required to make the payment is 2 WETH.

The easiest way to accomplish this is by calling `transferFrom` on WETH with the owner set to `msg.sender`:

```solidity
uint rate = PriceFeed('WETH'); // returned in 1e6
uint amountIn = (5000 * 1e6) / rate;
require(WETH.transferFrom(msg.sender, address(this), amountIn), 'transferFrom failed.');
```

### approve

Now that our contract owns 2 WETH, we need to approve to the <Link to='/docs/06-references/02-periphery/01-router'>router</Link> to withdraw this WETH:

```solidity
require(WETH.approve(address(SfpyRouter), amountIn), 'approve failed.');
```

### pay

Now we're ready to pay:

```solidity
SfpyRouter.pay(
    amountIn, 
    amountOutMin, 
    path, 
    msg.sender, 
    block.timestamp
);
```

## Safety considerations

Because the onous to pay the correct number of tokens is on the payer, to ensure that there are no misunderstandings between the payer and payee, we recommend that you calculate the amount of tokens required to be paid _before_ you pay them. Obviously, payers are free to pay any amount with any token, however, payees might not be satisfied with the amount paid or the token used and may refuse to dispense services if they deem the amount of tokens received is wildly off the current exchange rate. For example if a customer is trying to purchase a service for USD 1000, but only pays 10 DAI, the merchant will most likely refuse the service on account of the payment of 10 DAI not equalling the requested USD 1000 in value.

The best way to protect against these attacks is to use an external price feed or "price oracle". The best "oracle" is simply _traders' off-chain observation of the current price_, which can be passed into the payment.

The S2 interface automatically does this for you by pulling the current exchange rate between USD and a variety of ERC-20 tokens and ETH. Hence we recommend that for a seamless experience, most customers should use our open source interface. You can read more by visiting [Making a payment](/docs/04-interface/03-making-a-payment).
