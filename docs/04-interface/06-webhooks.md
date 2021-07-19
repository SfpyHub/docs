---
title: Using Webhooks
id: 06-webhooks
---

Webhooks can be configured on the SFPY interface fairly easily. If you've integrated SFPY using our API, webhooks are extremely useful in notifying you of certain events that take place asynchronously. When a payment is made, the appropriate flow would be to redirect your customer back to your website on a success page to give the impression that the payment has been made. But in the background transactions can usually take anywhere from 20 seconds to 5 minutes to confirm. Your integration can use webhooks to listen to payment confirmations along with other supported events in order to programmatically react and make updates on your system.

## Enabling webhooks

To enable webhooks for your SFPY account, log in to your interface, navigate to the Webhooks page and click on the `Enable` button.

<img
  src="https://storage.googleapis.com/sfpy-docs/enable-webhooks.gif"
  alt="Enable webhooks"
/>

## Adding an endpoint

To configure an endpoint that will receive notifications, you can add it to your SFPY account using the interface. However, in order for you to receive notifications on this endpoint, it should be live on your server.

<img
  src="https://storage.googleapis.com/sfpy-docs/create-endpoint.gif"
  alt="Create endpoint"
/>

## Update an endpoint

If you ever change the endpoint URL on your server you can update it using the interface.

<img
  src="https://storage.googleapis.com/sfpy-docs/update-endpoint.gif"
  alt="Update endpoint"
/>

## Subscribe to events

Currently, SFPY supports the following events:

- `payment:created`. This event is fired when a payment is confirmed on the blockchain
- `refund:created`. This event is fired when a refund is confirmed on the blockchain

Your endpoint can subscribe to both events or a single event depending on how you have configured your server to react to events. Some developers prefer to handle all events in a single endpoint while others prefer to keep separate endpoints for each event.

<img
  src="https://storage.googleapis.com/sfpy-docs/subscribe-events.gif"
  alt="Update endpoint"
/>

## View your shared secret

SFPY signs the webhook events it sends to your endpoints by including a signature in each event’s SFPY-Signature header. This allows you to verify that the events were sent by SFPY, not by a third party. You can verify signatures either using our official libraries, or manually using your own solution.

To verify the signature you need to store your shared secret on your server. You can access the shared secret using the interface

<img
  src="https://storage.googleapis.com/sfpy-docs/view-shared-secret.gif"
  alt="View shared secret"
/>

## Delete endpoint

If you ever need to stop receiving events you can either unsubscribe from all events for that endpoint or delete the endpoint entirely. To delete the endpoint, navigate to the webhooks page on the interface, find the endpoint to delete and confirm deletion.

<img
  src="https://storage.googleapis.com/sfpy-docs/delete-endpoint.gif"
  alt="Delete endpoint"
/>


