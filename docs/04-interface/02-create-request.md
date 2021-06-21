---
title: Create a Request
id: 02-create-request
---

import Link from '@docusaurus/Link'

Payment requests are created and stored off chain for the time being to save on gas fees. We envisage this moving on chain once it becomes feasible to create them with either an L2 or L1 solution in the near future.

There are two ways to create a payment request. The first method is with the API. You can read more by visiting our <Link to="/docs/05-api/01-introduction">API docs</Link>. All API requests are protected with a private key. To access your private key using the interface, please see the gif below

<img
  src="https://storage.googleapis.com/sfpy-docs/api-keys.gif"
  alt="API Keys"
/>

Payment requests can also be created using the interface. Currently we support the following fields on the interface:
- A subtotal denominated in USD
- An optional discount denominated in USD
- An optional tax denominated in USD

To learn how to create a request using the interface, please see the gif below

<img
  src="https://storage.googleapis.com/sfpy-docs/create-request.gif"
  alt="Create request"
/>