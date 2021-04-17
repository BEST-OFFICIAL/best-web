<template>
  <div class="capital">
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
            <span>5,000,000 BEST</span>
            <span>{{
              $t("由团队管理的矿机总算力决定，依据算力扩容进行增发")
            }}</span>
          </p>
          <p>{{ $t("初始流通量") }} <span>180,000 BEST</span></p>
        </div>
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
                {{ $t("作为矿机折旧费率，用以矿机设备的维修和报废矿机更新") }}
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
    </div>
  </div>
</template>
<script>
import Title from "@/components/Title";
export default {
  components: { Title },
};
</script>
<style lang="scss" scoped>
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
@media screen and (max-width: 750px) {
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
}
</style>
