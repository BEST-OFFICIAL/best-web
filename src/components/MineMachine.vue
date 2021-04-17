<template>
  <div class="advantage" id="advantage" :class="$i18n.locale">
    <Title>
      <div class="advantage-title">
        {{ $t("持有BEST挖矿 VS 自购矿机") }}
      </div>
    </Title>
    <ul>
      <li>
        <div class="left" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
          <div class="item">
            <div class="icon"></div>
            {{ $t("与顶尖矿机厂商合作，采购最先进设备") }}
          </div>
          <div class="item">
            <div class="icon"></div>
            {{ $t("购买BEST一次性费用，没有额外收费") }}
          </div>
        </div>
        <h3>{{ $t("矿机选购") }}</h3>
        <div class="right" data-scroll="toggle(.fromRightIn, .fromRightOut)">
          <div class="item">
            <div class="icon"></div>
            {{ $t("市面上产品鱼龙混杂，无法校验机器的可靠性且价格混乱") }}
          </div>
          <div class="item">
            <div class="icon"></div>
            {{ $t("除矿机设备价格，还有运费及运维等各种开销") }}
          </div>
        </div>
      </li>
      <li>
        <div class="left" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
          <div class="item">
            <div class="icon"></div>
            {{ $t("内蒙古、新疆、四川三地自有成熟矿场，火电、水电均衡搭配") }}
          </div>
          <div class="item">
            <div class="icon"></div>
            {{ $t("专业的矿机装配及性能调试") }}
          </div>
          <div class="item">
            <div class="icon"></div>
            {{ $t("专业矿机维护及维修服务") }}
          </div>
        </div>
        <h3>{{ $t("运维服务") }}</h3>
        <div class="right" data-scroll="toggle(.fromRightIn, .fromRightOut)">
          <div class="item">
            <div class="icon"></div>
            {{ $t("优质矿场早已满负荷，普通矿场电费昂贵") }}
          </div>
          <div class="item">
            <div class="icon"></div>
            {{ $t("无法校验机器的安装质量及稳定性") }}
          </div>
          <div class="item">
            <div class="icon"></div>
            {{ $t("缺少专业维护环境及维修能力") }}
          </div>
        </div>
      </li>
      <li>
        <div class="left" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
          <div class="item">
            <div class="icon"></div>
            {{ $t("通证化产品，随时买入，随时卖出") }}
          </div>
          <div class="item">
            <div class="icon"></div>
            {{ $t("每日收益依照鱼池上显示的全网平均收益自动发放，公开透明") }}
          </div>
        </div>
        <h3>{{ $t("获取收益") }}</h3>
        <div class="right" data-scroll="toggle(.fromRightIn, .fromRightOut)">
          <div class="item">
            <div class="icon"></div>
            {{ $t("买入时间长，退出周期更长") }}
          </div>
          <div class="item">
            <div class="icon"></div>
            {{ $t("可能遭遇无良矿场“拔线”等黑盒操作，不公开不透明") }}
          </div>
        </div>
      </li>
    </ul>
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
.advantage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  padding-bottom: 80px;
  &.en {
    h3 {
      width: 218px;
    }
  }
  ul {
    margin-top: 60px;
    li {
      display: flex;
      align-items: stretch;
      justify-content: center;
      margin-bottom: 30px;
      &:nth-child(1) {
        min-height: 150px;
      }
      &:nth-child(2) {
        min-height: 180px;
      }
      &:nth-child(3) {
        min-height: 205px;
        margin-bottom: 0;
      }
    }
  }
  h3 {
    font-weight: bold;
    font-size: 28px;
    color: #ffffff;
    letter-spacing: 2.8px;
    text-align: center;
    margin-left: 40px;
    margin-right: 40px;
    display: flex;
    align-items: center;
  }
  .left,
  .right {
    width: 420px;
    letter-spacing: 0;
    line-height: 25px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 50px;
    padding-right: 60px;
    background: rgba(24, 29, 34, 0.6);
    box-shadow: 0 10px 23px 0 rgba(0, 0, 0, 0.61);
    border-radius: 17px;
    padding-top: 20px;
    padding-bottom: 20px;
    .item {
      display: flex;
      margin: 5px 0;
      line-height: 22px;
      .icon {
        width: 10px;
        height: 10px;
        border: 2px solid #ff9300;
        border-radius: 50%;
        flex-shrink: 0;
        margin-right: 10px;
        margin-top: 5px;
        flex-shrink: 0;
      }
    }
  }
  .left {
    border: 1px solid #ff9300;
    color: #ffffff;
    &:hover {
      background-image: linear-gradient(90deg, #ff9300 0%, #ff6400 100%);
    }
  }
  .right {
    border: 1px solid #23a6b2;
    color: #bcd1e5;
  }
}
@media screen and (max-width: 750px) {
  .advantage {
    margin-top: 1rem;
    padding-bottom: 0.7rem;
    &.en {
      .advantage-title {
        width: 6.7rem;
        text-align: center;
        padding-bottom: 0.26rem;
      }
      h3 {
        width: 100%;
      }
      ul li {
        .left,
        .right {
          width: 100%;
          padding: 0.3rem;
          .item {
            margin: 0;
            margin-bottom: 0.24rem;
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
        .left {
          margin-bottom: 0.38rem;
        }
      }
    }
    ul {
      margin-top: 1rem;
      width: 6.7rem;
      li {
        margin-bottom: 1rem;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: stretch;
        &:nth-child(1) {
          height: auto;
        }
        &:nth-child(2) {
          height: auto;
        }
        &:nth-child(3) {
          height: auto;
          margin-bottom: 0;
        }
      }
    }
    h3 {
      width: 100%;
      margin: 0 0 0.5rem;
      font-size: 0.34rem;
      color: #ffffff;
      order: 1;
      display: flex;
      justify-content: center;
    }
    .left,
    .right {
      order: 2;
      width: 3.15rem;
      height: auto;
      line-height: 0.46rem;
      font-size: 0.24rem;
      padding: 0.4rem 0.25rem 0.25rem;
      border-radius: 0.17rem;
      justify-content: flex-start;
      .item {
        line-height: 0.3rem;
        .icon {
          margin-top: 0.06rem;
        }
      }
    }
    .left {
      border: 1px solid #ff9300;
      color: #ffffff;
    }
    .right {
      border: 1px solid #23a6b2;
      color: #bcd1e5;
    }
  }
}
</style>
