<template>
  <div id="app">
    <Nav />
    <NavMobile />
    <router-view />
    <div class="footer" id="footer">
      <div class="w">
        <img class="logo" src="~@/assets/images/footer-logo.png" alt="" />
        <div class="right">
          <ul class="menu-list">
            <li>
              <a href="javascript:;">
                <img src="~@/assets/images/icon-best.png" alt="" />
                BEST {{ $t("合约") }}
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="iconfont icongithub"></i>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://t.me/bestokens" target="_blank">
                <img src="~@/assets/images/telegram.png" alt="" /> Telegram
              </a>
            </li>
            <li>
              <a href="https://twitter.com/BESTokens" target="_blank">
                <img src="~@/assets/images/twitter.png" alt="" /> Twitter
              </a>
            </li>
          </ul>
          <!-- <div class="pic-box"> -->
          <!-- <div class="pic"></div>
            客服微信 -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
// import Web3 from "web3";
// import { linkMetamask, getMineContract,getBestContract } from "@/contract.js";

export default {
  name: "App",
  components: {
    Nav,
    NavMobile,
  },
  data() {
    return {
      ethereum: null,
    };
  },
  watch: {
    "ethereum.address"(n) {
      if (n) {
        this.init();
      }
    },
    "ethereum.selectedAddress"(n) {
      if (n) {
        this.init();
      }
    },
  },
  mounted() {
    this.ethereum = window.ethereum || {};
    this.init();
  },
  methods: {
    async init() {
      const ethereum = this.ethereum;
      var userAddress = ethereum.address || ethereum.selectedAddress;
      if (userAddress) {
        // var web3 = new Web3(Web3.currentProvider);
        // window.web3 = web3;
        // web3.eth.defaultAccount = userAddress;
        // console.log(web3)
        this.$store.commit("userAddress", userAddress);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  background-color: #0e0f10;
  display: flex;
  flex-direction: column;
  padding-top: 76px;
  //font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  
  .top {
    flex: 1;
  }
  .footer {
    width: 100%;
    height: 300px;
    background: #0c0e10;
    display: flex;
    align-items: center;
    .w {
      display: flex;
      height: 100px;
      justify-content: space-between;
      align-items: flex-end;
      .logo {
        width: 395px;
      }
      .right {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #ffffff;
        letter-spacing: 0;
        align-items: stretch;
        a {
          color: #ffffff;
        }
        .menu-list {
          display: flex;
          li {
            margin: 0 20px;
          }
          img {
            width: 24px;
            height: 24px;
            margin-right: 8px;
          }
          a {
            display: flex;
            align-items: center;
            .iconfont {
              font-size: 24px;
              margin-right: 8px;
              color: #ff9e00;
            }
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  #app {
    padding-top: 1.2rem;

    .footer {
      width: 100%;
      height: auto;
      padding-top: 0.7rem;
      padding-bottom: 0.5rem;
      .w {
        width: 100%;
        height: auto;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        flex-direction: column;
        align-items: center;
        .logo {
          width: 3.74rem;
        }
        .right {
          font-size: 0.3rem;
          align-items: stretch;
          margin-top: 0.5rem;
          .menu-list {
            flex-wrap: wrap;
            justify-content: space-between;
            li {
              margin: 4px 10px;
            }
            a {
              margin-bottom: 0.3rem;
            }
          }
        }
      }
    }
  }
}
</style>
