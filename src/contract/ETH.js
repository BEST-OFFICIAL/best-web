import Token from "./Token";
import abi from "@/abi/best";
import { ethAddress,providerAddress } from "@/config";
import Contract from "web3-eth-contract";
var contract;

Contract.setProvider(
  window.web3 ? window.web3.currentProvider : providerAddress
);

class ETH extends Token {
  constructor() {
    if (!contract) {
      contract = new Contract(abi, ethAddress);
    }
    super({ address: ethAddress, contract: contract, decimals: 18 });
  }
}

export default ETH;
