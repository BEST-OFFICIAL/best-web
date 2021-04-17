<template>
  <div class="home-page" :class="$i18n.locale">
    <div class="banner">
      <img src="@/assets/images/BEST.png" alt="" />
      <p data-scroll="toggle(.fromTopIn, .fromTopOut)">
        Bitcoin And Ethereum Standard Token
      </p>
      <div data-scroll="toggle(.fromTopIn, .fromTopOut)" class="info">
        {{ $t("让挖矿变得很简单") }}
        <br />
        {{ $t("人人都可以参与") }}
      </div>
    </div>
    <div class="content type2">
      <div class="flex">
        <Tab @change="handleChange" />
      </div>
      <ul class="pool-list">
        <li>
          <div class="top">
            <img src="@/assets/images/icon-best2.png" class="logo-box" alt="" />
            <span>BTC + ETH</span>
          </div>
          <div>
            <div class="item">
              <span>APY</span>
              <span>93%</span>
            </div>
            <div class="item">
              <span>{{ $t("质押") }}</span>
              <span>BEST</span>
            </div>
            <div class="item">
              <span>{{ $t("赚取") }}</span>
              <span>
                <img src="@/assets/images/bitcoin.png" alt="" />
                BTC+
                <img src="@/assets/images/ethereum.png" alt="" />
                ETH
              </span>
            </div>
            <div class="item">
              <span>{{ $t("总锁仓金额") }}</span>
              <span>{{ stakeAmount.best | token(0) | NumFormat }}</span>
            </div>
          </div>
          <router-link to="/stake/best" class="btn">
            {{ $t("选择") }}
          </router-link>
        </li>
        <li>
          <div class="top">
            <div class="logo-group">
              <img src="@/assets/images/icon-best2.png" alt="" />
              <img src="@/assets/images/usdt.png" alt="" />
              <div class="mini">
                <span>{{ tab == 1 ? "ETH" : "BSC" }}</span>
              </div>
            </div>
            <span>BEST-{{ usdtName }} LP</span>
          </div>
          <div>
            <div class="item">
              <span>APY</span>
              <span>93%</span>
            </div>
            <div class="item">
              <span>{{ $t("质押") }}</span>
              <span>BEST-{{ usdtName }} LP</span>
            </div>
            <div class="item">
              <span>{{ $t("赚取") }}</span>
              <span>
                <img src="@/assets/images/icon-musk.png" alt="" />MUSK</span
              >
            </div>
            <div class="item">
              <span>{{ $t("总锁仓金额") }}</span>
              <span>{{ stakeAmount.bestHusdt | token(0) | NumFormat }}</span>
            </div>
          </div>
          <router-link to="/stake/best/lp" class="btn">{{
            $t("选择")
          }}</router-link>
        </li>
        <li>
          <div class="top">
            <div class="logo-group">
              <img src="@/assets/images/icon-musk.png" alt="" />
              <img src="@/assets/images/usdt.png" alt="" />
              <div class="mini">
                <span>{{ tab == 1 ? "ETH" : "BSC" }}</span>
              </div>
            </div>
            <span>MUSK-{{ usdtName }} LP</span>
          </div>
          <div>
            <div class="item">
              <span>APY</span>
              <span>93%</span>
            </div>
            <div class="item">
              <span>{{ $t("质押") }}</span>
              <span>MUSK-{{ usdtName }} LP</span>
            </div>
            <div class="item">
              <span>{{ $t("赚取") }}</span>
              <span>
                <img src="@/assets/images/icon-musk.png" alt="" />MUSK</span
              >
            </div>
            <div class="item">
              <span>{{ $t("总锁仓金额") }}</span>
              <span>{{ stakeAmount.muskHusdt | token(0) | NumFormat }}</span>
            </div>
          </div>
          <router-link to="/stake/musk/lp" class="btn">{{
            $t("选择")
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BestPool from "@/contract/BestPool";
import BestHusdtPool from "@/contract/BestHusdtLpPool";
import MuskHusdtPool from "@/contract/MuskHusdtLpPool";

import Tab from "@/components/Tab";
export default {
  data() {
    return {
      tab: sessionStorage.tab || 1,
      bestPool: new BestPool(),
      bestHusdtPool: new BestHusdtPool(),
      muskHusdtPool: new MuskHusdtPool(),
      dataTimer: "",
      stakeAmount: {
        best: "",
        bestHusdt: "",
        muskHusdt: "",
      },
    };
  },
  computed: {
    usdtName() {
      return this.tab == 1 ? "USDT" : "USDT";
    },
  },
  components: { Tab },
  mounted() {
    var inviterId = this.$route.params.inviterId;
    if (inviterId) {
      sessionStorage.inviterId = inviterId;
    }
    this.getDate();
  },
  destroyed() {
    clearTimeout(this.dataTimer);
  },
  methods: {
    // 获取数据
    async getDate() {
      clearTimeout(this.dataTimer);
      this.stakeAmount.best = await this.bestPool.getTotalSupply();
      this.stakeAmount.bestHusdt = await this.bestHusdtPool.getTotalSupply();
      console.log(this.stakeAmount.bestHusdt)
      this.stakeAmount.muskHusdt = await this.muskHusdtPool.getTotalSupply();

      this.dataTimer = setTimeout(() => {
        this.getDate();
      }, 10000);
    },
    handleChange(active) {
      this.tab = active;
    },
  },
};
</script>
<style lang="scss" scoped>
.home-page {
  // background: #121518 url("~@/assets/images/banner.png") no-repeat top;
  background: url("~@/assets/images/banner2.png") no-repeat top;
}
.en {
  .banner {
    .info {
      letter-spacing: 2px;
    }
  }
}
.banner {
  padding-top: 130px;
  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  p {
    font-size: 46px;
    color: #ffffff;
    letter-spacing: 3.4px;
    text-align: center;
  }
  .info {
    font-size: 20px;
    color: #ffffff;
    letter-spacing: 10px;
    text-align: center;
    margin-top: 52px;
    br {
      display: none;
    }
  }
}
.content {
  margin: 60px auto 110px;
  width: 1120px;
  > .flex {
    justify-content: center;
  }
  .pool-list {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    margin-top: 40px;
    li {
      width: 340px;
      // background: #0d0e0f;
      background: rgba(11, 11, 11, 0.5);
      // border: 1px solid #3d3d3d;
      border: 1px solid #69400d;
      border-radius: 10px;
      padding: 40px 25px 30px;
      &:hover {
        border: 1px solid #ff7c28;
        box-shadow: 0 2px 22px 0 rgba(255, 160, 52, 0.4);
      }
      &:last-child {
        margin-right: 0;
      }
      .top {
        font-size: 24px;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 48px;
        font-weight: bold;
        .logo-box {
          width: 50px;
          height: 50px;
          margin-right: 20px;
        }
        .logo-group {
          margin-right: 20px;
          display: flex;
          position: relative;
          img {
            width: 50px;
            height: 50px;
            &:nth-child(2) {
              margin-left: -10px;
            }
          }
          .mini {
            position: absolute;
            bottom: 0;
            right: -10px;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background: #ffbf0e;
            display: flex;
            align-items: center;
            justify-content: center;
            span {
              font-size: 12px;
              color: #fff;
              transform: scale(0.8);
            }
          }
        }
      }
      .item {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        font-size: 16px;
        color: #ffffff;
        margin-bottom: 40px;
        &:first-child,
        &:last-child {
          span:last-child {
            font-size: 22px;
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
        span:last-child {
          font-size: 20px;
        }
        span {
          display: flex;
          align-items: center;
        }
        img {
          width: 22px;
          height: 22px;
          margin: 0 4px;
          vertical-align: middle;
        }
      }
      .btn {
        width: 100%;
        height: 40px;
        font-size: 20px;
        border-radius: 20px;
        margin: 30px auto 0;
      }
    }
  }
  &.type2 {
    > .flex {
      justify-content: flex-end;
    }
    .pool-list {
      li {
        // width: 510px;
        // padding: 46px;
        // padding-bottom: 32px;
        .top {
          margin-bottom: 10px;
          // flex-direction: row-reverse;
          // justify-content: space-between;
          .logo-box {
            width: 60px;
            height: 60px;
          }
        }
        .item {
          height: 60px;
          align-items: center;
          margin-bottom: 0;
          border-bottom: 1px solid rgba($color: #ffffff, $alpha: 0.05);
          &:last-child {
            border-bottom: none;
          }
        }
        .btn {
          margin-top: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .home-page {
    background: #111416;
  }
  .banner {
    height: auto;
    background: #0c0d11 url("~@/assets/images/banner-mobile.jpg") no-repeat top;
    background-size: cover;
    padding-top: 1.8rem;
    padding-bottom: 0.5rem;
    img {
      width: 4.82rem;
    }
    p {
      width: 6.67rem;
      margin: 0 auto;
      font-size: 0.6rem;
      letter-spacing: 0;
      line-height: 0.85rem;
    }
    .info {
      font-size: 0.32rem;
      letter-spacing: 0.1rem;
      text-align: center;
      margin-top: 1rem;
      line-height: 0.65rem;
      br {
        display: block;
      }
    }
  }
  .content,
  .content.type2 {
    margin: 0;
    width: 100%;
    .tab {
      width: 6rem;
      height: 0.88rem;
      margin: 0 auto;
      border-radius: 0.44rem;
      li {
        border-radius: 0.44rem;
        font-size: 0.4rem;
      }
    }
    .pool-list {
      margin-top: 1rem;
      width: 100%;
      flex-direction: column;
      align-items: center;
      li {
        width: 6.9rem;
        margin-right: 0;
        margin-bottom: 0.88rem;
        padding: 0.4rem;
        padding-bottom: 0.2rem;
        border: 1px solid rgba($color: #3d3d3d, $alpha: 0.5);
        .top {
          font-size: 0.44rem;
          margin-bottom: 0.3rem;
          justify-content: flex-start;
          flex-direction: row;
          span {
            order: 2;
            // margin-left: 0.46rem;
          }
          .logo-box {
            order: 1;
            width: 1.2rem;
            height: 1.2rem;
            margin-right: 0.46rem;
          }
        }
        .item {
          height: 1.3rem;
          font-size: 0.28rem;
          align-items: center;
          border-bottom: 1px solid rgba($color: #ffffff, $alpha: 0.15);
          margin-bottom: 0;
          &:last-child {
            border-bottom: none;
          }
          span:last-child {
            font-size: 0.4rem;
          }
        }
        .btn {
          width: 5.2rem;
          height: 0.88rem;
          font-size: 0.36rem;
          border-radius: 0.44rem;
          margin: 0.4rem auto 0.5rem;
        }
      }
    }
  }
}
</style>
