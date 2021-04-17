<template>
  <div class="nav-mobile" @click.stop>
    <div class="top">
      <router-link to="/">
        <img class="logo" src="~@/assets/images/best-logo.png" />
      </router-link>
      <div class="flex a-center">
        <Lang />
        <!-- <div class="btn">{{ $t("连接钱包") }}</div> -->
        <div v-if="!shortUserAddress" class="btn" @click="link">
          {{ $t("连接钱包") }}
        </div>
        <div v-else class="btn btn-login">
          {{ shortUserAddress }}
        </div>
        <img
          class="toggle"
          @click="open = !open"
          src="~@/assets/images/toggle.png"
        />
      </div>
    </div>
    <ul class="menu-list" :class="{ open: open }" @click="open = false">
      <li>
        <router-link to="/index">{{ $t("挖矿") }}</router-link>
      </li>
      <li>
        <!-- <router-link to="/exchange">兑换</router-link> -->
        <a href="javascript:;">{{ $t("兑换") }}</a>
      </li>
      <li>
        <router-link to="/introduce">{{ $t("介绍") }}</router-link>
      </li>
      <li>
        <router-link to="/invitation">{{ $t("邀请") }}</router-link>
      </li>
      <li>
        <a :href="whitepaperSrc" target="blank">
          {{ $t("白皮书") }}
        </a>
      </li>
      <!-- <li>
        <router-link to="/introduce">{{ $t("项目介绍") }}</router-link>
      </li> -->
      <!-- <li>
        <router-link to="/index#capital">{{ $t("质押挖矿") }}</router-link>
      </li> -->
      <!-- <li>
        <router-link to="/income">{{ $t("收益数据") }}</router-link>
      </li>
      <li>
        <router-link to="#">{{ $t("交易所") }}</router-link>
      </li>
        <li>
          <router-link to="/invitation">邀请</router-link>
        </li> -->
      <!-- <li>
        <div class="lang-switch">
          <span
            @click="switchLang('en')"
            class="lang"
            :class="{ curr: $i18n.locale === 'en' }"
            >EN</span
          >
          <span>/</span>
          <span
            @click="switchLang('zh')"
            class="lang"
            :class="{ curr: $i18n.locale === 'zh' }"
            >CN</span
          >
        </div>
      </li> -->
    </ul>
  </div>
</template>
<script>
// import { mapGetters,mapState } from 'vuex'
// import { publicAddress } from "@/config";
import { linkMetamask } from "@/contract.js";
import { mapGetters } from "vuex";
import Web3 from "web3";
import Lang from "@/components/Lang";
export default {
  data() {
    return {
      // publicAddress,
      open: false,
    };
  },
  components: {
    Lang,
  },
  props: ["activated"],
  created() {
    document.addEventListener("click", () => {
      this.open = false;
    });
  },
  computed: {
    ...mapGetters(["shortUserAddress"]),
    whitepaperSrc() {
      return this.$i18n.locale == "zh"
        ? "/pdf/web/viewer.html?file=/BEST_Whitepaper.pdf"
        : "/pdf/web/viewer.html?file=/BEST_Whitepaper.pdf";
    },
  },
  methods: {
    switchLang(lang) {
      this.$i18n.locale = lang;
      localStorage.locale = lang;
    },
    async link() {
      var address = await linkMetamask();
      var web3 = new Web3(Web3.currentProvider);
      web3.eth.defaultAccount = address;
      this.$store.commit("userAddress", address);
    },
  },
};
</script>
<style lang="scss" scoped>
.nav-mobile {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.88rem;
  z-index: 999;

  .top {
    height: 1.2rem;
    padding: 0 0.4rem 0 0.3rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #0d0e11;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    .logo {
      height: 0.62rem;
      display: block;
    }
    .toggle {
      height: 0.6rem;
    }

    .btn {
      width: auto;
      white-space: nowrap;
      min-width: 1.2rem;
      height: 0.62rem;
      margin-right: 0.4rem;
      font-size: 0.32rem;
      &.btn-login {
        color: #fff;
        border: none;
        cursor: default;
        background-image: linear-gradient(90deg, #ffc500 6%, #ff6400 90%);
      }
    }
  }
  .menu-list {
    position: absolute;
    top: 1.2rem;
    left: 0;
    background: #161619;
    transition: all 0.6s;
    visibility: hidden;
    opacity: 0;
    width: 100%;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    padding: 5px 0;
    &.open {
      // height: auto;
      // height: 168px;
      opacity: 1;
      visibility: visible;
    }
    li {
      font-size: 14px;
      img {
        margin-right: 5px;
      }
    }
    a {
      padding: 10px 0.4rem;
      font-size: 14px;
      display: block;
      font-weight: 500;
      color: #fff;
      line-height: 20px;
      opacity: 0.4;
      text-decoration: none;
      &.router-link-active {
        opacity: 1;
        font-weight: bold;
      }
    }
    .login-btn {
      padding: 10px 15px;
      color: #eadeff;
    }
  }
}

.lang-switch {
  display: flex;
  margin: 0;
  //font-family: Roboto-Regular;
  font-size: 14px;
  padding: 5px 0.4rem;
  .lang {
    cursor: pointer;
    color: #fff;
    opacity: 0.4;
  }
  .lang.curr {
    font-weight: bold;
    opacity: 1;
  }
}
@media screen and (max-width: 750px) {
  .nav-mobile {
    display: block;
  }
}
</style>
