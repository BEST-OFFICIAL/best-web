<template>
  <div class="stake-page">
    <div class="w">
      <div class="token-info">
        <div class="left">
          <template v-if="data.unit == 'BEST'">
            <img :src="data.logo" class="token-logo" alt="" />
          </template>
          <template
            v-if="data.unit == 'BEST-USDT LP' || data.unit == 'BEST-USDT LP'"
          >
            <div class="logo-group">
              <img src="@/assets/images/icon-best2.png" alt="" />
              <img src="@/assets/images/usdt.png" alt="" />
            </div>
          </template>
          <template
            v-if="data.unit == 'MUSK-USDT LP' || data.unit == 'MUSK-USDT LP'"
          >
            <div class="logo-group">
              <img src="@/assets/images/icon-musk.png" alt="" />
              <img src="@/assets/images/usdt.png" alt="" />
            </div>
          </template>
          <div class="info">
            <div class="token-name">{{ name }}</div>
            <div class="token-des" v-if="!data.isLP">
              {{
                $t(
                  "质押BEST 获得 BTC + ETH 质押后，每周可解除质押1/12数量的Token"
                )
              }}
            </div>
          </div>
        </div>
        <div class="right">
          <Tab @change="handleChange" />
        </div>
      </div>
      <div class="stake-content">
        <div class="left">
          <h3 class="pl10">{{ $t("质押") }} {{ data.unit }}</h3>
          <div class="box box-bg">
            <template v-if="data.unit == 'BEST'">
              <img :src="data.logo" class="token-logo" alt="" />
            </template>
            <template
              v-if="data.unit == 'BEST-USDT LP' || data.unit == 'BEST-USDT LP'"
            >
              <div class="logo-group">
                <img src="@/assets/images/icon-best2.png" alt="" />
                <img src="@/assets/images/usdt.png" alt="" />
              </div>
            </template>
            <template
              v-if="data.unit == 'MUSK-USDT LP' || data.unit == 'MUSK-USDT LP'"
            >
              <div class="logo-group">
                <img src="@/assets/images/icon-musk.png" alt="" />
                <img src="@/assets/images/usdt.png" alt="" />
              </div>
            </template>
            <div class="number">{{ stakeAmount | token }}</div>
            <span>{{ $t("已质押的") }} {{ data.unit }}</span>
            <div class="btn-group">
              <div class="btn btn-yellow" @click="showMialog(1)">
                {{ $t("增加质押") }}
              </div>
              <div class="btn" @click="showMialog(2)">{{ $t("减少质押") }}</div>
            </div>
          </div>
        </div>
        <div class="right">
          <h3>{{ $t("已获得挖矿收益") }}</h3>
          <div class="box-bg">
            <div class="flex" v-if="!data.isLP">
              <div class="box">
                <img
                  src="~@/assets/images/bitcoin.png"
                  class="token-logo"
                  alt=""
                />
                <div class="number">{{ reward.btc | token(6) }}</div>
                <span>BTCB</span>
                <div class="btn-group">
                  <div
                    class="btn btn-yellow"
                    v-loading="loading.getReward"
                    @click="getReward"
                  >
                    {{ $t("提取") }}
                  </div>
                </div>
              </div>
              <div class="line"></div>
              <div class="box">
                <img
                  src="~@/assets/images/ethereum.png"
                  class="token-logo"
                  alt=""
                />
                <div class="number">{{ reward.eth | token(6) }}</div>
                <span>ETH</span>
                <div class="btn-group">
                  <div
                    class="btn btn-yellow"
                    v-loading="loading.getReward"
                    @click="getReward"
                  >
                    {{ $t("提取") }}
                  </div>
                </div>
              </div>
            </div>
            <div class="flex" v-if="data.isLP">
              <div class="box">
                <img
                  src="~@/assets/images/icon-musk.png"
                  class="token-logo"
                  alt=""
                />
                <div class="number">{{ reward.musk | token }}</div>
                <span>MUSK</span>
                <div class="btn-group">
                  <div
                    class="btn btn-yellow"
                    v-loading="loading.getReward"
                    @click="getReward"
                  >
                    {{ $t("提取") }}
                  </div>
                </div>
              </div>
            </div>
            <div
              class="btn btn-yellow btn-mobile"
              v-loading="loading.getReward"
              @click="getReward"
            >
              {{ $t("提取") }}
            </div>
          </div>
        </div>
      </div>
      <p class="exchange-info" :class="{ center: data.isLP }" v-if="data.isLP">
        <img src="~@/assets/images/dodo.png" alt="" />
        {{ $t("提供流动性", { unit: data.unit.split(" ")[0] }) }}
      </p>
    </div>
    <el-dialog
      custom-class="stake-dialog"
      :show-close="false"
      :visible.sync="stakeVisible"
    >
      <template v-slot:title> {{ $t("增加质押2") }} {{ name }} </template>
      <div class="flex j-between">
        <span>{{ $t("已质押") }}</span>
        <span>{{ stakeAmount | token }} {{ data.unit }}</span>
      </div>
      <div class="form">
        <div class="flex j-between">
          <span>{{ $t("金额") }}</span>
          <span class="op7"
            >{{ balance | token | NumFormat }} {{ data.unit }}
            {{ $t("可用") }}</span
          >
        </div>
        <div class="input-box">
          <input type="number" v-model="amount" />
          <span class="op7" @click="max(1)">MAX</span>
        </div>
      </div>
      <template v-slot:footer>
        <div class="btn btn-red" @click="confirm" v-loading="loading.confirm">
          {{ $t("确认") }}
        </div>
      </template>
    </el-dialog>
    <el-dialog
      custom-class="unstake-dialog"
      :show-close="false"
      :visible.sync="unstakeVisible"
    >
      <template v-slot:title> {{ $t("解除质押") }} {{ name }} </template>
      <div class="flex j-between">
        <span>{{ $t("已质押") }}</span>
        <span>{{ stakeAmount | token }} {{ data.unit }}</span>
      </div>
      <div class="form">
        <div class="flex j-between" v-if="!data.isLP">
          <span>{{ $t("金额") }}</span>
          <span class="op7">
            {{ withdrawableInfo.withdrawableValue | token }} {{ data.unit }}
            {{ $t("可解除质押") }}
          </span>
        </div>
        <div class="input-box">
          <input type="number" v-model="amount" />
          <span class="op7" @click="max(2)">
            MAX
          </span>
        </div>
      </div>
      <template v-slot:footer>
        <div class="btn btn-blue2" @click="confirm" v-loading="loading.confirm">
          {{ $t("确认") }}
        </div>
        <div class="next-box" :class="$i18n.locale" v-show="!data.isLP">
          <div class="item">
            <span>{{ $t("下一次可解除质押时间") }} </span>
            <span>{{ withdrawableInfo.nextPeriod | formatTime }}</span>
          </div>
          <div class="item">
            <span>{{ $t("下一次增加可解除质押数量") }} </span>
            <span>
              {{ withdrawableInfo.nextPeriodWithdrawableValue | token }}
              {{ data.unit }}
            </span>
          </div>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import Tab from "@/components/Tab";
import { mapState } from "vuex";
import { formatDate } from "@/util";

export default {
  components: {
    Tab,
  },
  filters: {
    formatTime(time) {
      return formatDate(new Date(time * 1000));
    },
  },
  props: ["data", "name", "noFreeze"],
  data() {
    return {
      tabActive: sessionStorage.tab || 1,
      stakeVisible: false,
      unstakeVisible: false,
      inviterId: sessionStorage.inviterId,
      amount: "",
      stakeAmount: "-",
      balance: "-",
      totalSupply: "-",
      active: 1,
      endTime: 0,
      timer: null,
      dataTimer: null,
      withdrawableInfo: {
        withdrawableValue: "-",
      },
      inviteInfo: {},
      reward: {
        btc: "0",
        eth: "0",
        musk: "0",
      },
      loading: {
        confirm: false,
        approve: false,
        withdraw: false,
        getReward: false,
      },
    };
  },
  computed: {
    ...mapState(["userAddress"]),
    contarctAddress() {
      return this.data.pool.address;
    },
  },
  watch: {
    userAddress() {
      this.getDate();
    },
  },
  destroyed() {
    clearInterval(this.timer);
    clearTimeout(this.dataTimer);
    document.body.style.paddingBottom = "0";
  },
  mounted() {
    if (window.innerWidth < 750) {
      document.body.style.paddingBottom = "1.1rem";
    }
    this.getDate();
  },
  methods: {
    max(status) {
      var amount;
      console.log(this.balance);
      if (status == 1) {
        amount = this.balance / Math.pow(10, 6);
      } else {
        if (this.data.isLP) {
          amount = this.stakeAmount / Math.pow(10, 6);
        } else {
          amount = this.withdrawableInfo.withdrawableValue / Math.pow(10, 6);
        }
      }
      this.amount = amount;
    },
    handleChange(active) {
      this.tabActive = active;
      this.$emit("change", active);
    },
    showMialog(active) {
      this.active = active;
      this.amount = "";
      if (active == 1) {
        this.stakeVisible = true;
      } else {
        this.unstakeVisible = true;
      }
    },
    getDate() {
      if (!this.userAddress) return;
      clearTimeout(this.dataTimer);
      this.getStakeAmount();
      this.getBalance();
      if (!this.data.isLP) {
        this.getWithdrawableInfo();
        this.getUID();
        // this.getInviteInfo();
      }
      this.getRewardList();
      this.getTotalSupply();
      this.dataTimer = setTimeout(() => {
        this.getDate();
      }, 10000);
    },
    changeActive(active) {
      this.active = active;
      this.amount = "";
    },
    onCopy() {
      this.$message.success(this.$t("复制成功"));
    },
    onError() {
      this.$message.error(this.$t("复制失败"));
    },
    async confirm() {
      if (!this.amount || isNaN(this.amount) || this.amount <= 0) {
        this.$notify.error({
          title: this.$t("失败"),
          message: this.$t("金额不能小于", { amount: 0 }),
        });
        return;
      }
      if (this.active == 1) {
        await this.approve();
      } else {
        await this.withdraw();
      }
    },
    async approve() {
      var amount = this.amount;
      if (!amount || isNaN(amount) || amount <= 0) {
        this.$notify.error({
          title: this.$t("失败"),
          message: this.$t("金额不能小于", { amount: 0 }),
        });
        return;
      }
      if (this.loading.confirm) return;
      this.loading.confirm = true;
      try {
        // console.log(this.data.token.approve)
        var res = await this.data.token
          .approve({
            amount: amount,
            address: this.data.pool.address,
          })
          .on("transactionHash", (hash) => {
            this.$notify.info({
              title: this.$t("待确认"),
              message: this.$t("等待确认，交易hash") + hash,
            });
          });
        this.approveAmount = amount;
        this.$notify.success({
          title: this.$t("成功"),
          message: this.$t("授权成功", { hash: res.transactionHash }),
        });
        await this.stake(amount);
      } catch (e) {
        this.$notify.error({
          title: this.$t("失败"),
          message: e.message || e,
          error: e,
        });
      }
      this.loading.confirm = false;
    },
    async stake(amount) {
      await this.data.pool
        .stake(amount, this.data.isLP ? undefined : this.inviterId)
        .on("transactionHash", (hash) => {
          this.$notify.info({
            title: this.$t("待确认"),
            message: this.$t("等待确认，交易hash") + hash,
          });
        });
      this.stakeVisible = false;
      this.getDate();
      this.amount = "";
      this.$notify.success({
        title: this.$t("成功"),
        message: this.$t("质押成功"),
      });
    },
    async getReward() {
      if (this.loading.getReward) return;
      this.loading.getReward = true;
      try {
        await this.data.pool
          .getReward(this.amount)
          .on("transactionHash", (hash) => {
            this.$notify.info({
              title: this.$t("待确认"),
              message: this.$t("等待确认，交易hash") + hash,
            });
          });
        this.getDate();
        this.$notify.success({
          title: this.$t("成功"),
          message: this.$t("提取成功"),
        });
      } catch (e) {
        this.$notify.error({
          title: this.$t("失败"),
          message: e.message || e,
          error: e,
        });
      }
      this.loading.getReward = false;
    },
    async handleClickWithdraw() {
      if (this.endTime >= 0) return;
      var amount = await this.data.pool.freezeOf();
      if (amount == 0) {
        this.$notify.error({
          title: this.$t("失败"),
          message: this.$t("已冻结金额为0"),
        });
        return;
      }
      amount = (amount / Math.pow(10, 8)).toFixed(2);
      this.$confirm(
        this.$t(`已被冻结金`, { amount: amount }),
        this.$t("提示"),
        {
          confirmButtonText: this.$t("确定"),
          cancelButtonText: this.$t("取消"),
          type: "info",
        }
      )
        .then(() => {
          this.withdraw();
        })
        .catch(() => {
          this.$notify.error({
            message: this.$t("已取消"),
          });
        });
    },
    async withdraw() {
      if (this.loading.confirm) return;
      this.loading.confirm = true;
      try {
        await this.data.pool
          .withdraw(this.amount)
          .on("transactionHash", (hash) => {
            this.$notify.info({
              title: this.$t("待确认"),
              message: this.$t("等待确认，交易hash") + hash,
            });
          });
        this.amount = "";
        this.unstakeVisible = false;
        this.getDate();
        this.$notify.success({
          title: this.$t("成功"),
          message: this.$t("解除质押成功"),
        });
      } catch (e) {
        this.$notify.error({
          title: this.$t("失败"),
          message: e.message || e,
          error: e,
        });
      }
      this.loading.confirm = false;
    },
    async getStakeAmount() {
      this.stakeAmount = await this.data.pool.getStakeAmount();
    },
    async getRewardList() {
      this.reward = await this.data.pool.reward();
      // console.log(this.reward);
    },
    async getUID() {
      this.uid = await this.data.pool.getUID();
    },
    async getWithdrawableInfo() {
      this.withdrawableInfo = await this.data.pool.withdrawableInfo();
    },
    async getInviteInfo() {
      this.inviteInfo = await this.data.pool.getInviteInfo();
    },
    async getBalance() {
      this.balance = await this.data.token.balance();
    },
    async getTotalSupply() {
      this.totalSupply = await this.data.pool.getTotalSupply();
    },
  },
};
</script>
<style lang="scss" scoped>
.stake-page {
  // background: #121518 url("~@/assets/images/banner.png") no-repeat top;
  background: url("~@/assets/images/banner2.png") no-repeat top;
}
.btn-mobile {
  display: none;
}
.stake-page {
  padding-top: 66px;
  padding-bottom: 70px;
}
.pl10 {
  padding-left: 10px;
}
.w {
  width: 1100px;
  margin: 0 auto;
}
.token-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    color: #ffffff;
    .token-logo {
      width: 104px;
      height: 104px;
      background: #d8d8d8;
      border-radius: 50%;
      margin-right: 36px;
    }
    .logo-group {
      margin-right: 36px;
      display: flex;
      img {
        width: 104px;
        height: 104px;
        &:last-child {
          margin-left: -30px;
        }
      }
    }
    .token-name {
      font-size: 30px;
      font-weight: 500;
      line-height: 36px;
    }
    .token-des {
      font-size: 16px;
      line-height: 22px;
      margin-top: 10px;
    }
  }
}
.stake-content {
  margin-top: 57px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  color: #ffffff;
  .left {
    margin-right: 40px;
  }
  h3 {
    font-size: 26px;
    line-height: 38px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .box-bg {
    background: rgba($color: #0b0b0b, $alpha: 0.5);
    // border: 1px solid #3d3d3d;
    border: 1px solid #69400d;
    border-radius: 10px;
    &:hover {
      border: 1px solid #ff7c28;
      box-shadow: 0 2px 22px 0 rgba(255, 160, 52, 1);
    }
    .flex {
      align-items: center;
    }
  }
  .box {
    width: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .token-logo {
    width: 90px;
    height: 90px;
    margin-top: 34px;
    background: #d8d8d8;
    border-radius: 50%;
  }
  .logo-group {
    margin-top: 36px;
    display: flex;
    img {
      width: 90px;
      height: 90px;
      &:last-child {
        margin-left: -30px;
      }
    }
  }
  .number {
    margin-top: 34px;
    font-size: 34px;
  }
  span {
    font-size: 16px;
    margin-top: 20px;
  }
  .btn-group {
    display: flex;
    justify-content: center;
    margin-top: 58px;
    margin-bottom: 55px;
    .btn {
      margin: 0 13px;
      width: 134px;
      height: 40px;
      font-size: 20px;
      border-radius: 20px;
    }
  }
  .line {
    width: 1px;
    height: 270px;
    opacity: 0.2;
    background: #555555;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  }
  .right .btn {
    width: 180px;
  }
}
.exchange-info {
  font-family: NotoSansHans-Light;
  font-size: 16px;
  color: rgba($color: #c8d7eb, $alpha: 0.74);
  letter-spacing: 0;
  font-weight: 200;
  // margin-bottom: 70px;
  line-height: 16px;
  &.center {
    display: flex;
    align-items: center;
    align-items: flex-end;
    justify-content: center;
  }
  img {
    height: 18px;
    margin-right: 5px;
  }
}
.next-box.en {
  .item {
    // flex-direction: column;
    span:first-child {
      width: 60%;
      text-align: left;
    }
  }
}
::v-deep {
  .stake-dialog {
    .el-dialog__header {
      background: #c03e3f;
    }
    .form {
      .input-box {
        border: 2px solid #c03e3f;
      }
    }
  }
  .unstake-dialog {
    .el-dialog__header {
      background: #174c8e;
    }
    .form {
      .input-box {
        border: 2px solid #174c8e;
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .btn-mobile {
    display: block;
  }
  .stake-page {
    padding-top: 0.72rem;
    padding-bottom: 0.2rem;
  }
  .w {
    width: 6.7rem;
  }
  .token-info {
    .right {
      // display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #1f2125;
      padding: 0.18rem 0;
      display: flex;
      justify-content: center;
      z-index: 1;
    }
    .left {
      .token-logo {
        width: 1.36rem;
        height: 1.36rem;
        margin-right: 0.3rem;
        flex: 1 0 auto;
      }
      .logo-group {
        display: flex;
        margin-right: 0.3rem;
        img {
          width: 1.36rem;
          height: 1.36rem;
          &:last-child {
            margin-left: -0.5rem;
          }
        }
      }
      .token-name {
        font-size: 0.44rem;
        line-height: 0.57rem;
      }
      .token-des {
        font-size: 0.26rem;
        line-height: 0.37rem;
        margin-top: 0.1rem;
        opacity: 0.7;
        color: #c3d8ff;
      }
    }
  }
  .stake-content {
    margin-top: 1.1rem;
    margin-bottom: 20px;
    flex-direction: column;
    .left {
      margin-bottom: 0.7rem;
      margin-right: 0;
    }
    .right {
      h3 {
        display: none;
      }
      .flex {
        width: 100%;
        align-items: flex-end;
        justify-content: center;
      }
      .box-bg {
        display: flex;
        flex-direction: column;
        align-items: center;
        .btn-mobile {
          display: flex;
          width: 4.25rem;
          height: 0.8rem;
          border-radius: 0.4rem;
          margin-top: 0.9rem;
          margin-bottom: 1rem;
        }
      }
      .box {
        width: 50%;
        .btn-group {
          display: none;
        }
        .number {
          font-size: 0.44rem;
        }
      }
    }
    h3 {
      font-size: 0.36rem;
      line-height: 0.5rem;
      margin-bottom: 0.2rem;
    }
    .box {
      width: 100%;
    }
    .token-logo {
      width: 1.24rem;
      height: 1.24rem;
      margin-top: 0.7rem;
    }
    .logo-group {
      display: flex;
      margin-top: 0.7rem;
      padding-left: 0.5rem;
      img {
        width: 1.24rem;
        height: 1.24rem;
        &:last-child {
          margin-left: -0.5rem;
        }
      }
    }
    .number {
      margin-top: 0.65rem;
      font-size: 0.5rem;
    }
    span {
      font-size: 0.3rem;
      margin-top: 0.2rem;
    }
    .btn-group {
      margin-top: 0.9rem;
      margin-bottom: 1rem;
      .btn {
        margin: 0 0.3rem;
        width: 2.5rem;
        height: 0.8rem;
        font-size: 0.34rem;
        border-radius: 0.4rem;
      }
    }
    .line {
      width: 1px;
      height: 2.7rem;
    }
    .right .btn {
      width: 180px;
    }
  }
  .exchange-info {
    margin-top: 0.4rem;
    // margin-bottom: 0.2rem;
    opacity: 0.74;
    font-size: 0.28rem;
    color: #c8d7eb;
    line-height: 0.36rem;
    &.center {
      display: block;
    }
    img {
      height: 0.4rem;
      margin-bottom: 0.22rem;
      display: block;
    }
  }
}
</style>
