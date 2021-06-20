---
title: Pool Addresses
id: 07-getting-pool-addresses
---

import Link from '@docusaurus/Link'

# getPool

The most obvious way to get the address for a pool is to call <Link to='/docs/06-references/01-core/01-factory#pool'>pool</Link> on the factory. If the pool exists, this function will return its address, else `address(0)` (`0x0000000000000000000000000000000000000000`).

- The "canonical" way to determine whether or not a pool exists.
- Requires an on-chain lookup.

# CREATE2

Thanks to some [fancy footwork in the factory](https://github.com/sfpyhub/sfpy-core/blob/main/contracts/SfpyFactory.sol#L32), we can also compute pool addresses _without any on-chain lookups_ because of [CREATE2](https://eips.ethereum.org/EIPS/eip-1014). The following values are required for this technique:

|                        |                                                                                 |
| :--------------------- | :------------------------------------------------------------------------------ |
| `address`              | The <Link to='/docs/06-references/01-core/01-factory/#address'>factory address</Link> |
| `salt`                 | `keccak256(abi.encodePacked(token))`                                   |
| `keccak256(init_code)` | `0xeb2637f99a2b6f22f9bb3fc69bbf91a7638d31cf1ba27e0fcd415c4b0f28ca76`            |

* Can be computed offline.
* Requires the ability to perform `keccak256`.

## Examples

### Solidity

```solidity
address factory = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;
address token = 0xCAFE000000000000000000000000000000000000; // change me!

address pool = address(uint(keccak256(abi.encodePacked(
  hex'ff',
  factory,
  keccak256(abi.encodePacked(token)),
  hex'eb2637f99a2b6f22f9bb3fc69bbf91a7638d31cf1ba27e0fcd415c4b0f28ca76'
))));
```
