---
title: Webhooks
id: 02-webhooks
---

import Link from '@docusaurus/Link'

SFPY uses webhooks to notify your application when an event happens in your account. Webhooks are particularly useful for asynchronous events like when the blockchain confirms a payment or when you issue a refund back to your customer. 

You can begin using webhooks with your SFPY integration by:

- Creating a webhook endpoint on your server
- Use the interface to test that your endpoint works
- Subscribe to relevant events and go live

Before you begin, you should <Link to='/docs/04-interface/06-webhooks'>configure webhooks</Link> for your account using the interface.

## What are webhooks

Webhooks refers to a combination of elements that collectively create a notification and reaction system within a larger integration.

Metaphorically, webhooks are like a phone number that SFPY calls to notify you of activity in your SFPY account. The activity could be the creation of a new payment or a refund. The webhook endpoint is the person answering that call who takes actions based upon the specific information it receives.

Non-metaphorically, the webhook endpoint is just more code on your server, which could be written in Ruby, PHP, Node.js, or whatever. The webhook endpoint has an associated URL (e.g., https://example.com/webhooks). The SFPY notifications are Event objects. This Event object contains all the relevant information about what just happened, including the type of event and the data associated with that event. The webhook endpoint uses the event details to take any required actions, such as indicating that an order should be fulfilled.

## When to use webhooks

Many events that occur within SFPY are asynchronous: happening at a later time and not directly in response to your code’s execution. Most commonly these involve:

- Payments being confirmed on the blockchain
- Refunds being confirmed on the blockchain

With these and similar APIs, SFPY needs to notify your integration about changes to the status of an object so your integration can take subsequent steps.

The specific actions your webhook endpoint may take differs based upon the event. Some examples include:

- Updating a customer’s membership record in your database when a payment succeeds
- Logging an accounting entry when a refund is posted
- Indicating that an order can be fulfilled (i.e., boxed and shipped)

