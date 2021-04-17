import Token from "./Token";
import abi from "@/abi/best";
import { MuskAddress,providerAddress } from "@/config";
import Contract from "web3-eth-contract";
var contract;

Contract.setProvider(
  window.web3 ? window.web3.currentProvider : providerAddress
);

class Musk extends Token {
  constructor() {
    if (!contract) {
      contract = new Contract(abi, MuskAddress);
    }
    super({ address: MuskAddress, contract: contract });
  }
}

export default Musk;
