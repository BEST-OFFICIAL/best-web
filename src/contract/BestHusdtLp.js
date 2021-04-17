import Token from "./Token";
import abi from "@/abi/best";
import { bestHusdLpAddress, providerAddress } from "@/config";
import Contract from "web3-eth-contract";
var contract;

Contract.setProvider(
  window.web3 ? window.web3.currentProvider : providerAddress
);

class BestHusdtLp extends Token {
  constructor() {
    if (!contract) {
      contract = new Contract(abi, bestHusdLpAddress);
    }
    super({ address: bestHusdLpAddress, decimals: 6, contract });
  }
}

export default BestHusdtLp;
