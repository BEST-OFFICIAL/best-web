<template>
  <div class="page">
    <h3>捐赠</h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="BTC余额">
        {{ balance.btc | token | NumFormat }}
      </el-form-item>
      <el-form-item label="BTC">
        <el-input v-model="form.btc"></el-input>
        <el-button @click="donaBtc" v-loading="loading.donaBtc"
          >捐赠BTC</el-button
        >
      </el-form-item>
      <el-form-item label="ETH余额">
        {{ balance.eth | token | NumFormat }}
      </el-form-item>
      <el-form-item label="ETH">
        <el-input v-model="form.eth"></el-input>
        <el-button @click="donaEth" v-loading="loading.donaEth"
          >捐赠ETH</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import BestPool from "@/contract/BestPool";
import ETH from "@/contract/ETH";
import BTC from "@/contract/BTC";

export default {
  data() {
    return {
      bestPool: new BestPool(),
      btc: new BTC(),
      eth: new ETH(),
      form: {},
      balance: {
        btc: "-",
        eth: "-",
      },
      loading: {
        donaBtc: false,
        donaEth: false,
      },
    };
  },
  mounted() {
    this.getBalance();
  },
  methods: {
    transactionHash(hash) {
      this.$notify.info({
        title: this.$t("待确认"),
        message: this.$t("等待确认，交易hash") + hash,
      });
    },
    async donaBtc() {
      this.loading.donaBtc = true;
      try {
        var { btc } = this.form;
        await this.btc
          .approve({
            amount: btc,
            address: this.bestPool.address,
          })
          .on("transactionHash", this.transactionHash);
        await this.bestPool.incBtcPoolBalance(btc);
        this.$notify.success({
          title: this.$t("成功"),
          message: this.$t("成功"),
        });
        this.form.btc = "";
      } catch (e) {
        console.error(e)
        this.$notify.error({
          title: this.$t("失败"),
          message: e.message || e,
          error: e,
        });
      }
      this.loading.donaBtc = false;
      this.getBalance();
    },
    async donaEth() {
      this.loading.donaEth = true;
      try {
        var { eth } = this.form;
        await this.eth
          .approve({
            amount: eth,
            address: this.bestPool.address,
          })
          .on("transactionHash", this.transactionHash);
        await this.bestPool.incEthPoolBalance(eth);
        this.form.eth = "";
        this.$notify.success({
          title: this.$t("成功"),
          message: this.$t("成功"),
        });
      } catch (e) {
        this.$notify.error({
          title: this.$t("失败"),
          message: e.message || e,
          error: e,
        });
      }
      this.loading.donaEth = false;
      this.getBalance();
    },
    async getBalance() {
      this.balance.btc = await this.btc.balance();
      this.balance.eth = await this.eth.balance();
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  width: 600px;
  margin: 100px auto;
  color: #fff;
  h3 {
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
}
.el-input {
  width: 270px;
  margin-right: 10px;
}
</style>
