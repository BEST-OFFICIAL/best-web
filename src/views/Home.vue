<template>
  <div class="home-page" :class="$i18n.locale">
    <div class="banner">
      <h3 class="title-bg" data-scroll="toggle(.fromTopIn, .fromTopOut)">
        BEST
      </h3>
      <p data-scroll="toggle(.fromTopIn, .fromTopOut)">
        Bitcoin And Ethereum Standard Token
      </p>
      <div data-scroll="toggle(.fromTopIn, .fromTopOut)" class="info">
        {{ $t("让挖矿变得很简单") }}
        <br />
        {{ $t("人人都可以参与") }}
      </div>
    </div>
    <div class="project">
      <div class="capital" id="capital">
        <Title>
          <div class="title">{{ $t("算力通证BEST及收益规则") }}</div>
        </Title>
        <div class="center">
          <div class="left">
            <div class="item" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
              <h3>{{ $t("通证名称") }}</h3>
              <p>Bitcoin And Ethereum Standard Token (BEST)</p>
            </div>
            <div class="item" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
              <h3>{{ $t("通证信息") }}</h3>
              <p>
                <span class="label">{{ $t("总量") }}</span>
                <span>{{
                  $t("由团队管理的矿机总算力决定，依据算力扩容进行增发")
                }}</span>
              </p>
              <p>{{ $t("初始流通量") }} <span>5,000,000 BEST</span></p>
              <!-- <p>{{ $t("初始价格") }} <span>1 BEST=4 USDT</span></p> -->
            </div>
            <!-- <div class="item" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
              <h3>{{ $t("挖矿收益时间") }}</h3>
              <span>{{ $t("矿机购买并上架后，预计初始发行后1-2周内") }}</span>
            </div> -->
          </div>
          <div class="right">
            <div class="item" data-scroll="toggle(.fromRightIn, .fromRightOut)">
              <h3>{{ $t("收益分配") }}</h3>
              <p>
                <span>{{ $t("矿机挖矿总收益将分为三部分：") }}</span>
              </p>
              <div class="pc">
                <p>
                  70%
                  <span>
                    {{
                      $t("作为BEST质押者和BEST-USDT LP流动性提供者的挖矿奖励")
                    }}</span
                  >
                </p>
                <p>
                  20%
                  <span>{{ $t("用于回购销毁市场流通的MUSK") }}</span>
                </p>
                <p>
                  10%
                  <span>
                    {{
                      $t("作为矿机折旧费率，用以矿机设备的维修和报废矿机更新")
                    }}
                  </span>
                </p>
              </div>
            </div>
            <div class="img1-box">
              <img class="img1" src="@/assets/images/capital-img.png" alt="" />
              <div class="section section1">
                70% <span>{{ $t("挖矿奖励") }}</span>
              </div>
              <div class="section section2">
                20% <span>{{ $t("用于回购销毁市场流通的MUSK") }}</span>
              </div>
              <div class="section section3">
                10% <span>{{ $t("作为矿机折旧费用") }}</span>
              </div>
            </div>
            <div class="img2-box">
              <img class="img2" src="@/assets/images/capital-img2.png" alt="" />
              <ul>
                <li>
                  70%
                  {{ $t("作为BEST质押者和BEST-USDT LP流动性提供者的挖矿奖励") }}
                </li>
                <li>20% {{ $t("用于回购销毁市场流通的MUSK") }}</li>
                <li>
                  10%
                  {{ $t("作为矿机折旧费率，用以矿机设备的维修和报废矿机更新") }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bottom">
          <div class="item" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
            <h3>{{ $t("收益规则") }}</h3>
            <span>
              {{ $t("收益规则描述") }}
            </span>
            <span class="small">
              {{ $t("收益规则描述2") }}
            </span>
          </div>
          <div
            class="item item-right"
            data-scroll="toggle(.fromRightIn, .fromRightOut)"
          >
            <h3>{{ $t("发放规则") }}</h3>
            <span>
              {{
                $t(
                  "统计所有流通的BEST数量所产生的BTC和ETH收益，平均分发给官网质押的BSEST用户，每日UTC 00:00进行分发"
                )
              }}
            </span>
          </div>
        </div>
        <div class="btn-group">
          <div
            to="/stake"
            class="btn btn-yellow"
            data-scroll="toggle(.fromLeftIn, .fromLeftOut)"
          >
            {{ $t("质押挖矿") }}
          </div>
          <div
            to="/stake/lp"
            class="btn btn-blue"
            data-scroll="toggle(.fromRightIn, .fromRightOut)"
          >
            {{ $t("BEST流动性挖矿") }}
          </div>
          <!-- <router-link
            to="/stake"
            class="btn btn-yellow"
            data-scroll="toggle(.fromLeftIn, .fromLeftOut)"
          >
            {{ $t("质押挖矿") }}
          </router-link>
          <router-link
            to="/stake/lp"
            class="btn btn-blue"
            data-scroll="toggle(.fromRightIn, .fromRightOut)"
          >
            {{ $t("BEST流动性挖矿") }}
          </router-link> -->
        </div>
      </div>
      <div class="mask">
        <Title>{{ $t("治理通证MUSK") }}</Title>
        <div class="center">
          <div class="left">
            <div class="item" data-scroll="toggle(.fromTopIn, .fromTopOut)">
              <h3>{{ $t("通证名称") }}</h3>
              <div class="label">MUSK</div>
            </div>
            <div class="item" data-scroll="toggle(.fromTopIn, .fromTopOut)">
              <h3>{{ $t("币信息") }}</h3>
              <div class="label">
                {{ $t("总量") }}<span>10,000,000 MUSK</span>
              </div>
              <div class="label">{{ $t("初始发行量") }}<span>0 MUSK</span></div>
            </div>
            <div class="item" data-scroll="toggle(.fromTopIn, .fromTopOut)">
              <h3>{{ $t("交易所") }}</h3>
              <div class="label">
                <!-- 火币MDeX <img src="~@/assets/images/mdex.png" alt="" /> -->
              </div>
            </div>
          </div>
          <div class="right">
            <div class="item">
              <h3 data-scroll="toggle(.fromTopIn, .fromTopOut)">
                {{ $t("流动性挖矿") }}
              </h3>
              <div class="label" data-scroll="toggle(.fromTopIn, .fromTopOut)">
                <div>{{ $t("交易所") }}</div>
                <p class="marginTop">
                  {{ $t("流动性挖矿文字1") }}
                </p>
                <!-- <div class="small">
                  {{ $t("流动性挖矿文字2") }}
                </div> -->
              </div>
              <div class="label" data-scroll="toggle(.fromTopIn, .fromTopOut)">
                {{ $t("初始每日产量") }}
                <p class="marginTop">{{ $t("初始每日产出30,000 枚") }}</p>
              </div>
              <div class="label" data-scroll="toggle(.fromTopIn, .fromTopOut)">
                {{ $t("产量衰减") }}
                <p class="marginTop">{{ $t("每30天衰减13%") }}</p>
              </div>
            </div>
            <div class="item" data-scroll="toggle(.fromTopIn, .fromTopOut)">
              <h3>{{ $t("交易所") }}</h3>
              <div class="label">
                <!-- 火币MDeX <img src="~@/assets/images/mdex.png" alt="" /> -->
              </div>
            </div>
          </div>
        </div>
        <div
          to="/stake/lp"
          class="btn btn-yellow"
          data-scroll="toggle(.fromTopIn, .fromTopOut)"
        >
          {{ $t("MUSK流动性挖矿") }}
        </div>
        <!-- <router-link
          to="/stake/lp"
          class="btn btn-yellow"
          data-scroll="toggle(.fromTopIn, .fromTopOut)"
        >
          {{ $t("MUSK流动性挖矿") }}
        </router-link> -->
      </div>
    </div>
  </div>
</template>
<script>
import Title from "@/components/Title";
import { mapState } from "vuex";
import BestPool from "@/contract/BestPool";

export default {
  components: {
    Title,
  },
  data() {
    return {
      bestPool: new BestPool(),
    };
  },
  computed: {
    ...mapState(["mineContract", "bestContract", "userAddress"]),
  },
  mounted() {
    
    var inviterId = this.$route.params.inviterId;
    if (inviterId) {
      sessionStorage.inviterId = inviterId;
    }
    
    new window.ScrollTrigger({
      addHeight: true,
    });
  },
  destroyed() {},
};
</script>
<style lang="scss" scoped>
.title-bg {
  background: linear-gradient(to right, #ffc500, #ff6300);
  -webkit-background-clip: text;
  color: transparent;
}
.en {
  .banner {
    .info {
      letter-spacing: 2px;
    }
  }
}
.banner {
  height: 805px;
  background: #0c0d11 url("~@/assets/images/banner.jpg") no-repeat center;
  padding-top: 150px;
  h3 {
    font-weight: bold;
    font-size: 240px;
    line-height: 280px;
    letter-spacing: 0;
    text-align: center;
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
    letter-spacing: 15.38px;
    text-align: center;
    margin-top: 68px;
    br {
      display: none;
    }
  }
}
.project {
  .capital {
    width: 1200px;
    margin: 0 auto;
    margin-top: 70px;
    padding-left: 130px;
    .center,
    .bottom {
      display: flex;
      align-items: flex-start;
    }
    .center {
      padding-top: 64px;
    }
    .right {
      margin-left: 70px;
      .item > p span {
        margin-left: 0;
      }
      .img1-box {
        width: 413px;
        height: 151px;
        position: relative;
        .section {
          color: #ffffff;
          font-size: 16px;
          position: absolute;
          display: flex;
          align-items: flex-start;
          span {
            font-size: 14px;
            line-height: 14px;
            color: #c0c4d7;
            margin-left: 6px;
            white-space: nowrap;
          }
        }
        .section1 {
          top: -20px;
          left: 0;
        }
        .section2 {
          top: 26px;
          left: 258px;
        }
        .section3 {
          bottom: 24px;
          left: 209px;
        }
      }
      .img2-box {
        display: none;
      }
    }
    .btn-group {
      display: flex;
      // padding-left: 185px;
      padding-left: 135px;
      margin-top: 50px;
      .btn {
        // width: 180px;
        width: 220px;
        height: 50px;
        font-size: 18px;
        font-weight: bold;
      }
      .btn-yellow {
        margin-right: 138px;
      }
    }

    .item {
      margin-bottom: 30px;
      width: 420px;
      &:last-child {
        margin-bottom: 0;
      }
      h3 {
        font-weight: bold;
        font-size: 18px;
        color: #ff9e00;
        letter-spacing: 1px;
        text-align: left;
        margin-bottom: 18px;
      }
      p {
        font-size: 16px;
        color: #ffffff;
        display: flex;
        text-align: left;
        padding: 5px 0;
        line-height: 20px;
        .label {
          flex-shrink: 0;
          font-size: 16px;
          color: #ffffff;
          margin-left: 0;
        }
        span {
          margin-left: 10px;
        }
      }
      span {
        font-size: 16px;
        // line-height: 30px;
        letter-spacing: 0.5px;
        color: #c0c4d7;
        line-height: 20px;
      }
      .small {
        font-size: 12px;
        display: block;
        line-height: 24px;
        margin-top: 5px;
      }
    }
    .item-right {
      margin-left: 70px;
    }
  }
  .mask {
    width: 100%;
    background: #0c0f12 url("~@/assets/images/bg-icon.png");
    padding-top: 80px;
    padding-bottom: 90px;
    margin-top: 84px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .center {
      margin-top: 57px;
      margin-bottom: 62px;
      display: flex;
      justify-content: center;
      padding-left: 219px;
      .left {
        margin-right: 140px;
      }
      .right {
        .label {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
        }
        .item:last-child {
          display: none;
        }
      }
      .item {
        max-width: 509px;
      }
    }
    .btn {
      // width: 180px;

      width: 220px;
      height: 50px;
      font-size: 18px;
      font-weight: bold;
    }
    .item {
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }
      h3 {
        font-size: 18px;
        color: #ff9e00;
        margin-bottom: 18px;
        font-weight: bold;
      }
      .label {
        font-size: 14px;
        color: #ffffff;
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
        span,
        p,
        .small {
          font-size: 14px;
          color: #c0c4d7;
          opacity: 0.87;
          line-height: 18px;
        }
        .marginTop {
          margin-top: 15px;
          line-height: 20px;
        }
        span {
          margin-left: 9px;
        }
        .small {
          font-size: 12px;
          line-height: 18px;
          margin-left: 0;
          margin-top: 5px;
        }
      }
      img {
        height: 26px;
        vertical-align: middle;
        margin-left: 10px;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .en {
    .banner {
      .info {
        letter-spacing: 0px;
      }
    }
  }
  .banner {
    height: auto;
    background: #0c0d11 url("~@/assets/images/banner-mobile.jpg") no-repeat top;
    background-size: cover;
    padding-top: 1.8rem;
    padding-bottom: 0.5rem;
    h3 {
      font-size: 2.4rem;
      line-height: 2.8rem;
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
  .project {
    width: 100%;
    .capital {
      width: 100%;
      margin-top: 1.7rem;
      padding: 0 0.75rem;
      .title {
        font-size: 0.4rem;
      }
      .center,
      .bottom {
        flex-direction: column;
      }
      .center {
        padding-top: 0.75rem;
      }
      .btn-group {
        padding-left: 0;
        margin-top: 0;
        .btn {
          width: 3rem;
          font-size: 0.3rem;
        }
        .btn-yellow {
          margin-right: 0.5rem;
        }
      }
      .left {
        padding-top: 0;
      }
      .right {
        margin-left: 0;
        .img1-box,
        .pc {
          display: none;
        }
        .item {
          margin-bottom: 0.1rem;
        }
        .img2-box {
          display: flex;
          justify-content: space-between;
          img {
            height: 2rem;
            margin-top: 0.3rem;
            margin-bottom: 0.3rem;
            margin-right: 0.1rem;
          }
          ul {
            font-size: 0.24rem;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            li:nth-child(2) {
              margin: 0.14rem 0;
            }
          }
        }
      }

      .item {
        margin-bottom: 0.9rem;
        width: auto;
        &:last-child {
          margin-bottom: 0.4rem;
        }
        h3 {
          font-size: 0.3rem;
          margin-bottom: 0.4rem;
          letter-spacing: 1.88px;
        }
        p {
          font-size: 0.28rem;
          letter-spacing: 0;
          line-height: 0.4rem;
          margin-bottom: 0.46rem;
          padding: 0;
          .label {
            font-size: 0.28rem;
          }
          &:last-child {
            margin-bottom: 0;
          }
          span {
            margin-left: 0.35rem;
          }
        }
        span {
          font-size: 0.28rem;
          line-height: 0.4rem;
          max-width: 5rem;
        }
        .small {
          font-size: 0.24rem;
          line-height: 0.3rem;
          margin-top: 0;
        }
      }
      .item-right {
        margin-left: 0;
      }
    }
    .mask {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      margin-top: 1.8rem;
      // margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .center {
        margin-top: 1.3rem;
        margin-bottom: 0;
        padding-left: 0.54rem;
        padding-right: 0.35rem;
        flex-direction: column;
        .left {
          margin-right: 0;
          display: flex;
          .item:first-child {
            margin-right: 1.5rem;
          }
          .item:last-child {
            display: none;
          }
        }
        .right {
          .item:last-child {
            display: block;
            margin-bottom: 1.1rem;
          }
          .label {
            margin-bottom: 0.2rem;
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
        .item {
          max-width: 509px;
        }
      }
      .btn {
        width: 3rem;
        font-size: 0.3rem;
      }
      .item {
        margin-bottom: 0.45rem;
        &:last-child {
          margin-bottom: 0;
        }
        h3 {
          font-size: 0.3rem;
          margin-bottom: 0.3rem;
        }
        .label {
          font-size: 0.28rem;
          span,
          p,
          .small {
            font-size: 0.28rem;
            line-height: 0.4rem;
          }
          .marginTop {
            margin-top: 0.1rem;
            line-height: 0.4rem;
          }
          span {
            margin-left: 0.18rem;
          }
          .small {
            font-size: 0.24rem;
          }
        }
        img {
          height: 0.4rem;
          margin-left: 0.1rem;
        }
      }
    }
  }
}
</style>
