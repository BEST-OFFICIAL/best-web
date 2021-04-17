<template>
  <div class="modal" :class="{ show: show }">
    <div class="box">
      <div class="title">{{ title }}</div>
      <div class="close" @click="close"></div>
      <div class="input-box">
        <div class="label">
          <span>{{$t("金额")}}</span>
          <span>{{ balance | token | NumFormat }} {{ token }} {{$t("可用")}}</span>
        </div>
        <div class="input">
          <input type="text" v-model="amount" />
          <div class="btn-max" @click="max">MAX</div>
        </div>
      </div>
      <div class="btn btn-green" @click="confirm">
        <Loading :status="loading">{{$t("確認")}}</Loading>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from "@/components/Loading";
import { DEFAULT_DECIMALS } from "@/config";

export default {
  props: ["title", "show", "loading", "token", "balance"],
  components: {
    Loading,
  },
  watch: {
    show(n) {
      if (!n) {
        this.amount = "";
      }
    },
  },
  data() {
    return {
      amount: "",
    };
  },
  methods: {
    close() {
      this.$emit("update:show", false);
    },
    confirm() {
      if (this.amount > this.balance / Math.pow(10, DEFAULT_DECIMALS)) {
        this.$message.error(this.$t("余额不足"));
        return;
      }
      this.$emit("confirm", this.amount);
    },
    max() {
      this.amount = this.balance / Math.pow(10, DEFAULT_DECIMALS);
    },
  },
};
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba($color: #000000, $alpha: 0.33);
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  z-index: 10;
  &.show {
    display: flex;
  }
  .box {
    padding: 30px 20px;
    box-shadow: 0 4px 8px 0 rgba(47, 128, 237, 0.05);
    max-width: 540px;
    width: 80%;
    background: #ffffff;
    position: relative;
  }
  .close {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 15px;
    right: 20px;
    cursor: pointer;
    background: url("~@/assets/images/close.png") no-repeat center;
  }
  .title {
    text-align: center;
    color: #000;
    font-size: 20px;
    line-height: 30px;
    font-weight: 800;
  }
  .input-box {
    width: 100%;
    margin-top: 20px;
    .label {
      display: flex;
      justify-content: space-between;
      color: #000;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    .input {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border: 1px solid #dbdbdb;
      padding: 0 15px;
      border-radius: 4px;
      background-color: #fff;
      height: 50px;
      input {
        border: none;
        background-color: #fff;
        font-size: 18px;
        height: 100%;
        width: 100%;
        flex: 1;
        color: #000;
        padding-left: 0;
      }
      .btn-max {
        flex: none;
        align-items: center;
        background-color: #ee0700;
        border: 0;
        border-radius: 9px;
        color: #fff;
        cursor: pointer;
        display: flex;
        font-size: 14px;
        font-weight: 700;
        height: 26px;
        justify-content: center;
        outline: none;
        padding: 0 10px;
        font-size: 14px;
      }
    }
  }
  .btn-green {
    width: 100%;
    margin-top: 30px;
    height: 46px;
  }
}
</style>
