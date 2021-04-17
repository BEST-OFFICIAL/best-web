import Web3 from "web3";
const DEFAULT_DECIMALS = 6;
var decimalsMap = {};

class Token {
  constructor({ contract, address }) {
    this.address = address;
    this.contract = contract;
    this.defaultAddress = "0x907111a90F842e7450e01484a3c2F7a14Bc09A12";
    this.getDecimals();
  }
  async balance() {
    var balance = await this.contract.methods
      .balanceOf(sessionStorage.userAddress || this.defaultAddress)
      .call({
        from: sessionStorage.userAddress || this.defaultAddress,
      });
    // console.log(balance)
    return await this.formWei(balance);
  }
  async getDecimals() {
    if (!decimalsMap[this.address]) {
      decimalsMap[this.address] = await this.contract.methods.decimals().call({
        from: sessionStorage.userAddress || this.defaultAddress,
      });
    }

    return decimalsMap[this.address];
  }
  approve({ amount, address }) {
    var res = this.toWei(amount);

    return this.contract.methods.approve(address, res).send({
      from: sessionStorage.userAddress || this.defaultAddress,
    });
  }

  async formWei(value) {
    if (!decimalsMap[this.address]) await this.getDecimals();
    if (decimalsMap[this.address] == DEFAULT_DECIMALS) return value;
    var str = value.toString();
    return (
      str.substr(
        0,
        str.length - (decimalsMap[this.address] - DEFAULT_DECIMALS)
      ) || 0
    );
  }

  toWei(value) {
    value = Web3.utils.toWei(value.toString(), "mwei");
    if (decimalsMap[this.address] != DEFAULT_DECIMALS) {
      value += new Array(decimalsMap[this.address] - DEFAULT_DECIMALS)
        .fill(0)
        .join("");
    }
    console.log(value)
    return value;
  }
}

export default Token;
