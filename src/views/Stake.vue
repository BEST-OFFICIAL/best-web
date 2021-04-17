<template>
  <div class="stake-page">
    <h2 class="page-title">{{ $t("选择一个矿") }}</h2>
    <h3 class="page-title-small">
      {{ $t("质押BEST-USDT LP，赚取BTC+ETH+MUSK") }}
    </h3>
    <img class="bg1" src="~@/assets/images/stake-bg.png" alt="" />
    <img class="bg2" src="~@/assets/images/stake-bg.png" alt="" />
    <div class="list">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.stake-page {
  padding-top: 73px;
  position: relative;
  .bg1 {
    position: absolute;
    right: 50%;
    margin-right: 375px;
    top: 75px;
  }
  .bg2 {
    -moz-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: fliph; /*IE*/
    position: absolute;
    left: 50%;
    margin-left: 375px;
    top: 75px;
  }
}
.page-title {
  font-weight: bold;
  font-size: 39px;
  color: #ffffff;
  letter-spacing: 5px;
}
.page-title-small {
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 6px;
  margin-top: 26px;
  margin-bottom: 62px;
}
.list {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 50px;
}
@media screen and (max-width: 750px) {
  .stake-page {
    padding-top: 0;
    .bg1,
    .bg2 {
      display: none;
    }
  }
  .page-title {
    padding-top: 0.64rem;
    font-size: 0.4rem;
    letter-spacing: 0.05rem;
  }
  .page-title-small {
    font-size: 0.26rem;
    letter-spacing: 0;
    margin-top: 0.26rem;
    margin-bottom: 1rem;
  }
  .list {
    width: 7rem;
    padding-bottom: 0.6rem;
    h3 {
      font-size: 0.34rem;
    }
    .box {
      width: 100%;
      padding: 0.78rem 0.28rem;
      margin-bottom: 50px;
      flex-direction: column;
      .section1 {
        flex-direction: column;
        width: 100%;
        .name {
          width: 100%;
          padding-top: 0;
          margin-right: 0;
          .icon {
            width: auto;
            display: flex;
            justify-content: center;
            margin-bottom: 0.58rem;
          }
          .i1,
          .i2 {
            width: 1.2rem;
            height: 1.2rem;
          }
          .i2 {
            position: static;
            margin-left: -0.2rem;
          }
          h4 {
            font-size: 0.36rem;
            line-height: 1;
            margin-top: 0;
          }
        }
        .info {
          width: 100%;
          justify-content: flex-start;
          font-size: 0.3rem;
          margin-top: 0.84rem;
          h3 {
            margin-bottom: 0.3rem;
          }
          p {
            width: 100%;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #2a333e;
            padding: 0.3rem 0;
          }
          .address {
            width: auto;
            font-size: 0.3rem;
            margin-top: 0;
          }
          .pc {
            display: none;
          }
          .mobile {
            display: block;
          }
        }
      }
      .border {
        display: none;
      }
      .section2 {
        margin-top: 1.2rem;
        padding-left: 0;
        padding-right: 0;
        p {
          font-size: 0.3rem;
          margin-top: 0.56rem;
          display: flex;
          justify-content: space-between;
        }
        .btn-group {
          margin-top: 0.9rem;
          .btn {
            font-size: 0.3rem;
            width: 100%;
            min-width: none;
            &:last-child {
              flex-shrink: 0;
            }
          }
        }
        .input-box {
          font-size: 0.26rem;
          margin-top: 0.38rem;
          margin-bottom: 0.5rem;
          input {
            margin-top: 0.25rem;
          }
        }
        .btn.btn-yellow {
          width: 3.55rem;
          height: 0.8rem;
          font-size: 0.32rem;
          margin: 0 auto;
        }
      }
      .section3 {
        width: 100%;
        padding-left: 0;
        margin-top: 1.2rem;
        h3 {
          margin-bottom: 0.66rem;
        }
        .item {
          margin-bottom: 0.6rem;
          font-size: 0.3rem;
          &:last-child {
            margin-bottom: 0.6rem;
          }
        }
        .small {
          font-size: 0.28rem;
          line-height: 0.5rem;
        }
        .btn {
          width: auto;
          height: 0.6rem;
          font-size: 0.28rem;
        }
      }
    }
  }
}
</style>
