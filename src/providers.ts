import Network from "./enums/Network";

const RPC_URL: Record<Network, string> = {
  [Network.Ethereum]: "https://cloudflare-eth.com/",
  [Network.Polygon]: "https://polygon-rpc.com/",
  [Network.BNBSmartChain]: "https://bsc-dataseed1.binance.org/",
  [Network.Avalanche]: "https://api.avax.network/ext/bc/C/rpc",
  [Network.Optimism]: "https://mainnet.optimism.io/",
  [Network.Arbitrum]: "https://arb1.arbitrum.io/rpc",
  [Network.Fantom]: "https://rpcapi.fantom.network/",
  [Network.Celo]: "https://forno.celo.org",
};

export default RPC_URL;
