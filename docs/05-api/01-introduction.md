---
title: API Introduction
id: 01-introduction
---

SFPY runs a small service in the cloud that manages payment requests and listens to the Ethereum blockchain for events fired from the SFPY Router. This is done to allow merchants to create payment requests off chain, saving gas fees. The core premise of SFPY, which facilitates payments between payers and payees still remains on-chain and SFPY at no point controls any access to private keys and by extension, wallets.

While the API documentation is a work in progress, access to the API reference can be accessed by visiting the [Postman collection](https://documenter.getpostman.com/view/3342320/TzeZE6K8)

The API can be used to create either one-off payment requests, or can be integrated into an application as a payment method at the point of checkout. Plugins for various e-commerce platforms will be released shortly along with support for webhooks.

The API listens for payment and refund events emmitted by the SFPY Router to create payment and refund objects in the database, along with updating a request to `paid` if necessary.

:::info

This section is still a work in progress. For any questions related to the API, please join us on our Discord server.

:::