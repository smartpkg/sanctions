# Sanctions
Check whether a wallet address is sanctioned.

## Installation
```shell
npm install @smartpkg/sanctions
```

## Usage
```typescript
import { isSanctioned } from '@smartpkg/sanctions';

const walletAddress = '0x7F367cC41522cE07553e823bf3be79A889DEbe1B';
const chainId = 1;
await isSanctioned(chainId, walletAddress);
```

## Supported Networks
A list of supported networks:
* Ethereum 
* Polygon 
* BNBSmartChain
* Avalanche
* Optimism
* Arbitrum
* Fantom 
* Celo
