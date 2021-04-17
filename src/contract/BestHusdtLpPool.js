import Stake from "./Stake";
import abi from "@/abi/lp";
import { bestHusdLpPoolAddress, providerAddress } from "@/config";
import Contract from "web3-eth-contract";
import BestHusdtLp from "@/contract/BestHusdtLp";

var contract;

Contract.setProvider(
  window.web3 ? window.web3.currentProvider : providerAddress
);
class BestHusdtLpPool extends Stake {
  constructor() {
    if (!contract) {
      contract = new Contract(abi, bestHusdLpPoolAddress);
    }
    super({
      address: bestHusdLpPoolAddress,
      tokenContract: new BestHusdtLp(),
      contract,
    });
  }

  async earned() {
    return await this.contract.methods.earned(sessionStorage.userAddress).call({
      from: sessionStorage.userAddress,
    });
  }
  async reward() {
    var musk = await this.earned();
    return {
      musk,
    };
  }
}

export default BestHusdtLpPool;
