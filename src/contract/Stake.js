class Stake {
  constructor({ contract, address, tokenContract }) {
    this.address = address;
    this.contract = contract;
    this.tokenContract = tokenContract;
    this.defaultAddress = "0x907111a90F842e7450e01484a3c2F7a14Bc09A12";
  }
  async getStakeAmount() {
    var balance = await this.contract.methods
      .balanceOf(sessionStorage.userAddress || this.defaultAddress)
      .call({
        from: sessionStorage.userAddress || this.defaultAddress,
      });
    return await this.tokenContract.formWei(balance);
  }
  stake(amount) {
    var res = this.tokenContract.toWei(amount);
    return this.contract.methods.stake(res).send({
      from: sessionStorage.userAddress || this.defaultAddress,
    });
  }
  withdraw(amount) {
    var res = this.tokenContract.toWei(amount);
    return this.contract.methods.withdraw(res).send({
      from: sessionStorage.userAddress || this.defaultAddress,
    });
  }
  async freezeOf() {
    return await this.contract.methods
      .freezeOf(sessionStorage.userAddress || this.defaultAddress)
      .call({
        from: sessionStorage.userAddress || this.defaultAddress,
      });
  }
  getReward() {
    return this.contract.methods.getReward().send({
      from: sessionStorage.userAddress || this.defaultAddress,
    });
  }
  async getFreezeTime() {
    return await this.contract.methods
      .unfreezeTime(sessionStorage.userAddress || this.defaultAddress)
      .call({
        from: sessionStorage.userAddress || this.defaultAddress,
      });
  }
  async getTotalSupply() {
    var balance = await this.contract.methods.totalSupply().call({
      from: sessionStorage.userAddress || this.defaultAddress,
    });
    return await this.tokenContract.formWei(balance);
  }
  async reward() {
    return await this.contract.methods
      .reward(sessionStorage.userAddress || this.defaultAddress)
      .call({
        from: sessionStorage.userAddress || this.defaultAddress,
      });
  }
  async withdrawableInfo() {
    return await this.contract.methods
      .withdrawableInfo(sessionStorage.userAddress || this.defaultAddress)
      .call({
        from: sessionStorage.userAddress || this.defaultAddress,
      });
  }
}

export default Stake;
