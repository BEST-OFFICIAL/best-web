import Token from "./Token";
import abi from "@/abi/best";
import { muskHusdLpAddress, providerAddress } from "@/config";
import Contract from "web3-eth-contract";
var contract;

Contract.setProvider(
  window.web3 ? window.web3.currentProvider : providerAddress
);

class MuskHusdtLp extends Token {
  constructor() {
    if (!contract) {
      contract = new Contract(abi, muskHusdLpAddress);
    }
    super({ address: muskHusdLpAddress, decimals: 8, contract });
  }
}

export default MuskHusdtLp;
