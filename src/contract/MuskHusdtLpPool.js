import Stake from "./Stake";
import abi from "@/abi/lp";
import { muskHusdLpPoolAddress, providerAddress } from "@/config";
import Contract from "web3-eth-contract";
import MuskHusdtLp from "@/contract/MuskHusdtLp";

var contract;

Contract.setProvider(
  window.web3 ? window.web3.currentProvider : providerAddress
);
class MuskHusdtLpPool extends Stake {
  constructor() {
    if (!contract) {
      contract = new Contract(abi, muskHusdLpPoolAddress);
    }
    super({
      address: muskHusdLpPoolAddress,
      tokenContract: new MuskHusdtLp(),
      contract,
    });
  }
  // 查询Musk收益
  async earned() {
    return await this.contract.methods.earned(sessionStorage.userAddress).call({
      from: sessionStorage.userAddress,
    });
  }
  // 获取所有收益
  async reward() {
    var musk = await this.earned();
    return {
      musk,
    };
  }
}

export default MuskHusdtLpPool;
