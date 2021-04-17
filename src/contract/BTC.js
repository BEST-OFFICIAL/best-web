import Token from "./Token";
import abi from "@/abi/best";
import { btcAddress, providerAddress } from "@/config";
import Contract from "web3-eth-contract";
var contract;

Contract.setProvider(
  window.web3 ? window.web3.currentProvider : providerAddress
);

class BTC extends Token {
  constructor() {
    if (!contract) {
      contract = new Contract(abi, btcAddress);
    }
    super({ address: btcAddress, contract: contract, decimals: 8 });
  }
}

export default BTC;
