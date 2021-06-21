---
title: Making a payment
id: 03-making-a-payment
---

import Link from '@docusaurus/Link'

Paying a request requires a payer to have sufficient funds for one of the supported tokens. All payments are made using the interface but without any intervention by SFPY. Payers interact directly with the SFPY smart contracts on the Ethereum blockchain and SFPY does not have access to any private keys at any time. As a convenience, the interface makes use of Compound's Open Price feed to convert USD amounts into respective token amounts. A consequece of this is that only USD amounts are supported for the time being.

To learn more about how to make a payment, see the gif below.

<img
  src="https://storage.googleapis.com/sfpy-docs/make-payment.gif"
  alt="Make a payment"
/>

### View paid requests

Requests can be viewed either through the API or by using the interface. To learn more on how to access requests using the API please refer to our <Link to="/docs/05-api/01-introduction">API docs</Link>. 

If you're using the interface, the requests displayed are filtered by the current chain your account is connected to i.e if you're currently connected to the Ropsten network, you will only see requests that were created for the Ropsten network.

To learn more about how to view requests, see the gif below.

<img
  src="https://storage.googleapis.com/sfpy-docs/view-paid-request.gif"
  alt="View requests"
/>
