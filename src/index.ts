import { ethers } from "ethers";
import abi from "./abi.json";
import Network from "./enums/Network";
import RPC_URL from "./providers";

const SUPPORTED_NETWORKS: number[] = Object.keys(RPC_URL).map((k) => Number(k));

export async function isSanctioned(chainId: Network, address: string) {
  if (!SUPPORTED_NETWORKS.includes(chainId)) {
    throw `[@smartpkg/sanctions] Network is not supported. (Chain ID: ${chainId})`;
  }
  const url = RPC_URL[chainId];
  const provider = new ethers.providers.JsonRpcProvider(url);
  const contractAddress = "0x40C57923924B5c5c5455c48D93317139ADDaC8fb";
  // const exampleAddress = "0x7F367cC41522cE07553e823bf3be79A889DEbe1B";

  const contract = new ethers.Contract(contractAddress, abi, provider);

  const res = await contract.isSanctioned(address);

  return res;
}
