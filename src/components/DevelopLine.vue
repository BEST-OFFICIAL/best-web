<template>
  <div class="route" id="route">
    <Title>{{ $t("路线图") }}</Title>
    <!-- <div class="map"></div> -->
    <div class="route-list" :class="$i18n.locale">
      <div class="item" data-scroll="toggle(.fromTopIn, .fromTopOut)">
        <div class="title">
          <img src="~@/assets/images/line.png" alt="" />
          2021.3
        </div>
        <div class="value">
          <div class="icon"></div>
          {{ $t("BEST算力Token发行5,000,000 BEST") }}
        </div>
        <div class="value">
          <div class="icon"></div>
          {{ $t("治理代币MUSK发行10,000,000 MUSK") }}
        </div>
      </div>
      <div class="item" data-scroll="toggle(.fromTopIn, .fromTopOut)">
        <div class="title">
          <img src="~@/assets/images/line.png" alt="" />
          2021.4
        </div>
        <div class="value">
          <div class="icon"></div>
          {{ $t("上线火币MDex AMM去中心化交易所") }}
        </div>
        <div class="value">
          <div class="icon"></div>
          {{ $t("洽谈其他交易所及新矿机购买上架") }}
        </div>
        <div class="value">
          <div class="icon"></div>
          {{ $t("开始交易1-2周后") }}<br />
          {{ $t("BTC，ETH挖矿开始并进行每日分红") }}
        </div>
      </div>
      <div class="item" data-scroll="toggle(.fromTopIn, .fromTopOut)">
        <div class="title">
          <img src="~@/assets/images/line.png" alt="" />
          2021.5
        </div>
        <div class="value">
          <div class="icon"></div>
          {{ $t("一期50P算力售卖完成并进行下一期算力扩容") }}
          <br />
          {{ $t("招募全国经销商") }}
        </div>
      </div>
      <div class="item" data-scroll="toggle(.fromTopIn, .fromTopOut)">
        <div class="title">
          <img src="~@/assets/images/line.png" alt="" />
          2021.6
        </div>
        <div class="value">
          <div class="icon"></div>
          {{ $t("上线BEST矿池软件") }}
        </div>
      </div>
      <div class="item" data-scroll="toggle(.fromTopIn, .fromTopOut)">
        <div class="title">
          <img src="~@/assets/images/line.png" alt="" />
          {{ $t("2021年末") }}
        </div>
        <div class="value">
          <div class="icon"></div>
          {{ $t("与纳斯达克上市公司合作并计划上市") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";
export default {
  components: {
    Title,
  },
};
</script>

<style lang="scss" scoped>
.route {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 116px;
  // .map {
  //   margin-top: 50px;
  //   width: 100%;
  //   height: 350px;
  //   background: url("~@/assets/images/router-bg.png") no-repeat center;
  //   background-size: auto 100%;
  // }
  .route-list {
    margin-top: 50px;
    width: 100%;
    height: 350px;
    background: url("~@/assets/images/router-bg.png") no-repeat center;
    background-size: auto 100%;
    position: relative;
    img {
      display: none;
    }
    .title {
      font-size: 16px;
      color: #ff9e00;
      font-weight: bold;
    }
    .value {
      font-size: 14px;
      line-height: 18px;
      color: #c0c4d7;
      display: flex;
      align-items: flex-start;
      margin-top: 14px;
      .icon {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid #ff9e00;
        margin-right: 8px;
        margin-top: 4px;
        flex-shrink: 0;
      }
    }
    .item {
      position: absolute;
      left: 50%;
      top: 50%;
    }
    .item:nth-child(1) {
      transform: translate(-166%, -219%);
    }
    .item:nth-child(2) {
      transform: translate(-104%, -14%);
    }
    .item:nth-child(3) {
      transform: translate(-20%, -265%);
    }
    .item:nth-child(4) {
      transform: translate(95%, -14%);
    }
    .item:nth-child(5) {
      transform: translate(125%, -365%);
    }
    &.en {
      .item:nth-child(1) {
        transform: translate(-166%, -153%);
        width: 260px;
      }
      .item:nth-child(2) {
        transform: translate(-104%, -14%);
        width: 252px;
      }
      .item:nth-child(3) {
        transform: translate(-20%, -172%);
        width: 295px;
      }
      .item:nth-child(4) {
        transform: translate(49%, -58%);
      }
      .item:nth-child(5) {
        transform: translate(125%, -266%);
        width: 242px;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .route {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    .map {
      display: none;
    }
    .route-list {
      display: block;
      width: 6rem;
      height: auto;
      margin: 1rem auto 0;
      border-left: 1px solid #ff9e00;
      padding-top: 0.32rem;
      background: none;
      img {
        display: block;
      }
      .item {
        margin-bottom: 0.5rem;
        position: static;
        transform: none !important;
        &:last-child {
          margin-bottom: 0;
        }
        .title {
          display: flex;
          align-items: center;
          margin-left: -0.1rem;
          margin-bottom: 0.26rem;
          font-size: 0.26rem;
          color: #ffa943;
          img {
            margin-right: 0.26rem;
            width: 1.6rem;
          }
        }
        .value {
          padding-left: 0.4rem;
          font-size: 0.26rem;
          color: #ffffff;
          line-height: 0.46rem;
          margin-bottom: 0.1rem;
          .icon {
            width: 0.16rem;
            height: 0.16rem;
            border: 1px solid #ff9e00;
            margin-right: 0.1rem;
            margin-top: 0.14rem;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>
