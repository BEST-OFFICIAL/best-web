import Token from "./Token";
import abi from "@/abi/best";
import { bestAddress,providerAddress } from "@/config";
import Contract from "web3-eth-contract";
var contract;

Contract.setProvider(
  window.web3 ? window.web3.currentProvider : providerAddress
);

class Best extends Token {
  constructor() {
    if (!contract) {
      contract = new Contract(abi, bestAddress);
    }
    super({ address: bestAddress, contract: contract });
  }
}

export default Best;
