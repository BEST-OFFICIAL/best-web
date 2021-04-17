import Stake from "./Stake";
import bestPoolAbi from "@/abi/bestPool";
import { bestPoolAddress, providerAddress } from "@/config";
import Contract from "web3-eth-contract";
import Best from "@/contract/Best";
import ETH from "@/contract/ETH";
import BTC from "@/contract/BTC";
import { decode, encode } from "js-base64";

const DEFAULT_INVITER_ID = "MTAwMDAw";
const INVITER_ID_BASE = 100000;
const best = new Best();
const eth = new ETH();
const btc = new BTC();

var contract;

Contract.setProvider(
  window.web3 ? window.web3.currentProvider : providerAddress
);
class BestPool extends Stake {
  constructor() {
    if (!contract) {
      contract = new Contract(bestPoolAbi, bestPoolAddress);
    }
    super({ address: bestPoolAddress, contract, tokenContract: best });
    this.userId = null;
  }

  stake(amount, inviterId = DEFAULT_INVITER_ID) {
    try {
      console.log(DEFAULT_INVITER_ID);
      inviterId = decode(inviterId) - INVITER_ID_BASE;
    } catch (e) {
      console.log("error inviterID:", inviterId);
      throw e;
    }
    var res = best.toWei(amount);
    return this.contract.methods.stake(res, inviterId).send({
      from: sessionStorage.userAddress,
    });
  }

  async getUID() {
    var uid = await this.contract.methods
      .getUID(sessionStorage.userAddress)
      .call({
        from: sessionStorage.userAddress,
      });

    if (!uid) return null;
    return encode(uid * 1 + INVITER_ID_BASE + "");
  }
  async getInviteInfo() {
    var inviteInfo = await this.contract.methods
      .getInviteInfo(sessionStorage.userAddress)
      .call({
        from: sessionStorage.userAddress,
      });
    inviteInfo.reward = {
      btc: await btc.formWei(inviteInfo[2][0], 8),
      eth: await eth.formWei(inviteInfo[2][1], 18),
    };
    return inviteInfo;
  }
  async userIdMap() {
    return await this.contract.methods
      .userIdMap(sessionStorage.userAddress)
      .call({
        from: sessionStorage.userAddress,
      });
  }

  async incBtcPoolBalance(amount) {
    var res = btc.toWei(amount);

    return this.contract.methods.incBtcPoolBalance(res).send({
      from: sessionStorage.userAddress,
    });
  }

  async incEthPoolBalance(amount) {
    var res = eth.toWei(amount);
    return this.contract.methods.incEthPoolBalance(res).send({
      from: sessionStorage.userAddress,
    });
  }

  async reward() {
    var res = await this.contract.methods
      .reward(sessionStorage.userAddress || this.defaultAddress)
      .call({
        from: sessionStorage.userAddress || this.defaultAddress,
      });
    res.btc = await btc.formWei(res.btc, 8);
    res.eth = await eth.formWei(res.eth, 18);
    return res;
  }
}

export default BestPool;
