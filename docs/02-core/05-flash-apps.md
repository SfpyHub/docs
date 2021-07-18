---
title: Flash Apps
id: 05-flash-apps
---

import Link from '@docusaurus/Link'

Flash Loans are very easily accessible through a neat interface:

```solidity
function borrow(address sender, uint256 amount, bytes calldata data)
```

More details can be found in the <Link to="/docs/02-core/04-flash-loans">Flash Loans</Link> guide and <Link to="/docs/06-references/01-core/04-borrower">Borrower Reference</Link>.

The concept of "triggering" a smart contract by conforming to an interface led us to think about a *new* interface with a different use case. What if you could trigger an entire suite of smart contracts after a payment has been made? Developers that are interested in selling items online (NFTs, subscriptions, physical goods etc), raising funds through ICOs or even things we haven't thought about yet, can all do so now without having to worry about the payment acceptance side. This is now neatly encapsulated in the `afterPay` callback:

```solidity
  function afterPay(address sender, address token, uint256 amount, bytes calldata data) external
```

The basic idea is as follows: After a customer has transferred the required tokens into the pool but *before* any liquidity tokens are minted for the merchant, the smart contract triggers the function described above. This calls the developer's smart contracts through which they can decide whether the customer has paid enough, paid with an acceptable token and any additional business logic they deem necessary before transfering the purchased item to the customer. Most importantly, the developer can revert the entire transaction at any point returning all funds back to the customer if they choose to abort the transaction.

Flash Apps are very early in development and quite frankly are risky at the moment. Customers interacting with Flash Apps, should be absolutely certain that they *trust* the code written before making a payment since any nefarious actor can take the funds without actually honoring the purchase (although this problem exists in traditional finance as well).

However, we see Flash Apps evolving into a marketplace or App Store of sorts where the community hand picks their favorite apps and lists them under a common standard. This way, customers have more confidence in picking the apps they wish to interact with.

:::caution

Flash Apps are still early in development! Please only interact with those apps that you trust. Reach out on our Discord server with any questions.

:::