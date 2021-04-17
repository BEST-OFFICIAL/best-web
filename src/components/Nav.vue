<template>
  <div class="nav" :class="{ fixed: fixed }">
    <div class="w">
      <router-link to="/index">
        <img class="logo" src="~@/assets/images/best-logo.png" alt="" />
      </router-link>
      <ul class="menu">
        <li>
          <router-link to="/index">{{ $t("挖矿") }}</router-link>
        </li>
        <li>
          <a href="javascript:;">{{ $t("兑换") }}</a>
        </li>
        <li>
          <router-link to="/introduce">{{ $t("介绍") }}</router-link>
        </li>
        <li>
          <router-link to="/invitation">{{ $t("邀请") }}</router-link>
        </li>
        <li>
          <a :href="whitepaperSrc" target="blank">{{ $t("白皮书") }}</a>
        </li>
        <li class="lang-box">
          <Lang />
        </li>
        <li>
          <div v-if="!shortUserAddress" class="btn" @click="link">
            {{ $t("连接钱包") }}
          </div>
          <div v-else class="btn btn-login">
            {{ shortUserAddress }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { linkMetamask } from "@/contract.js";
import { mapGetters } from "vuex";
import Lang from "@/components/Lang";
import Web3 from "web3";

export default {
  components: {
    Lang,
  },
  data() {
    return {
      tscContract: null,
      address: "",
      fixed: false,
    };
  },
  computed: {
    ...mapGetters(["shortUserAddress"]),
    whitepaperSrc() {
      return this.$i18n.locale == "zh"
        ? "/BEST_Whitepaper.pdf"
        : "/BEST_Whitepaper.pdf";
    },
  },
  mounted() {
    document.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    document.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    async link() {
      var address = await linkMetamask();
      var web3 = new Web3(Web3.currentProvider);
      web3.eth.defaultAccount = address;
      this.$store.commit("userAddress", address);
    },
    login() {
      this.$message.error(this.$t("请先登录钱包"));
    },
    onScroll() {
      this.fixed = window.scrollY > 50;
    },
    showRegister() {
      this.$eventBus.$emit("showRegister");
    },
  },
};
</script>
<style lang="scss" scoped>
.nav {
  height: 76px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transition: all 0.8s;
  z-index: 10;
  // &.fixed {
  position: fixed;
  background: #16171b;
  border-bottom: 1px solid #555555;
  border-top: 1px solid #555555;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  // }
  .w {
    margin: 0 auto;
    height: 100%;
    width: 1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    height: 40px;
  }
  .menu {
    display: flex;
    align-items: center;
    color: #c0c4d7;
    font-size: 16px;
    > li {
      margin-left: 60px;
      &:last-child {
        margin-left: 0;
      }
      &.lang-box {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
    a {
      display: block;
      font-size: 14px;
      color: #c0c4d7;
      letter-spacing: 1px;
      text-align: center;
      border-bottom: 1px solid transparent;
      padding: 14px 5px;
      &.router-link-active,
      &:hover {
        color: #ffb900;
        border-bottom: 1px solid #ffb900;
      }
    }
  }
  .lang-switch {
    display: flex;
    cursor: pointer;
    .lang.curr {
      color: #fff;
    }
  }
  .btn {
    height: 30px;
    min-width: 114px;
    &.btn-login {
      color: #fff;
      border: none;
      cursor: default;
      background-image: linear-gradient(90deg, #ffc500 6%, #ff6400 90%);
    }
  }
}
@media screen and (max-width: 750px) {
  .nav {
    display: none;
  }
}
</style>
