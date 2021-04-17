<template>
  <ul class="list">
    <li>
      <h2>{{ $t("BEST数据") }}</h2>
      <div class="box">
        <h3>BEST</h3>
        <div class="item">
          <span>{{ $t("当前价格") }}</span>
          <span>28.88 USDT</span>
        </div>
        <div class="item">
          <span>
            {{ $t("质押总量") }}
          </span>
          <span>50,020</span>
        </div>
        <div class="item">
          <span>
            {{ $t("质押年化收益") }}
            <Tips>
              {{
                $t(
                  "年化收益=当日单BEST收益 × 当日 BTC或ETH价格 / BEST币价 × 365"
                )
              }}
            </Tips>
          </span>
          <span>165%</span>
        </div>
        <!-- <div class="item">
          <span>
            {{ $t("质押收益/天") }}
            <Tips>
              {{ $t("根据全网挖矿数据减去2.5%鱼池矿池手续费计算") }}
            </Tips>
          </span>
          <span>
            0.00000534 ETH<br />
            +0.00000534 BTC
          </span>
        </div> -->
        <!-- <div class="btn btn-yellow">{{ $t("去交易") }}</div> -->
      </div>
    </li>
    <li>
      <h2>{{ $t("MUSK数据") }}</h2>
      <div class="box">
        <h3>MUSK</h3>
        <div class="item">
          <span>{{ $t("当前价格") }}</span>
          <span>28.88 USDT</span>
        </div>
        <div class="item">
          <span>{{ $t("质押总量") }}</span>
          <span>50,020</span>
        </div>
        <div class="item">
          <span>
            {{ $t("质押年化收益") }}
            <Tips>
              {{
                $t(
                  "年化收益=当日单BEST收益 × 当日 BTC或ETH价格 / BEST币价 × 365"
                )
              }}
            </Tips>
          </span>
          <span>165%</span>
        </div>
        <!-- <div class="item">
          <span>
            {{ $t("质押收益/天") }}
            <Tips>
              {{ $t("根据全网挖矿数据减去2.5%鱼池矿池手续费计算") }}
            </Tips>
          </span>
          <span>
            0.00000534 ETH<br />
            +0.00000534 BTC
          </span>
        </div> -->
        <!-- <div class="btn btn-yellow">{{ $t("去交易") }}</div> -->
      </div>
    </li>
    <li>
      <h2>{{ $t("矿机参数") }}</h2>
      <div class="box">
        <div class="top">
          <h3>{{ $t("BTC矿机") }}</h3>
          <div class="item">
            <span>{{ $t("功耗比") }} </span>
            <span>35W/T</span>
          </div>
          <div class="item">
            <span>
              {{ $t("电费单价") }}
            </span>
            <span>0.055kW/H</span>
          </div>
          <!-- <div class="item">
          <span>
            {{ $t("矿机折旧费率") }}
          </span>
          <span>10%</span>
        </div> -->
          <!-- <div class="item">
            <span>
              {{ $t("矿机每T净收益") }}
              <Tips>
                {{ $t("根据全网挖矿数据减去2.5%鱼池矿池手续费计算") }}
              </Tips>
            </span>
            <span>
              0.000003 BTC/Day
            </span>
          </div> -->
        </div>
        <!-- <div class="btn btn-yellow">{{ $t("去交易") }}</div> -->
      </div>
    </li>
    <li>
      <h2></h2>
      <div class="box">
        <div class="top">
          <h3>{{ $t("ETH矿机") }}</h3>
          <div class="item">
            <span> {{ $t("功耗比") }}</span>
            <span>1.8W/M</span>
          </div>
          <div class="item">
            <span>
              {{ $t("电费单价") }}
            </span>
            <span>0.055kW/H</span>
          </div>
          <!-- <div class="item">
          <span>
            {{ $t("矿机折旧费率") }}
          </span>
          <span>10%</span>
        </div> -->
          <!-- <div class="item">
            <span>
              {{ $t("矿机每T净收益") }}
              <Tips>
                {{ $t("根据全网挖矿数据减去2.5%鱼池矿池手续费计算") }}
              </Tips>
            </span>
            <span>
              0.000003 BTC/Day
            </span>
          </div> -->
        </div>
        <!-- <div class="btn btn-yellow">{{ $t("去交易") }}</div> -->
      </div>
    </li>
    <li class="empty"></li>
    <li class="empty"></li>
    <li class="empty"></li>
    <li class="empty"></li>
  </ul>
</template>
<script>
import Tips from "@/components/Tips";
export default {
  components: { Tips },
};
</script>
<style lang="scss" scoped>
.list {
  display: flex;
  width: 1200px;
  margin: 150px auto 50px;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 270px;
    margin-bottom: 80px;
  }
  h2 {
    height: 24px;
    font-size: 24px;
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 28px;
  }
  .box {
    background: #151a20;
    box-shadow: 0 2px 23px 0 rgba(0, 0, 0, 0.15);
    border-radius: 17px;
    padding: 40px 20px;
    height: 264px;
    h3 {
      font-weight: bold;
      font-size: 28px;
      color: #ff9e00;
      letter-spacing: 0;
    }
    .item {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 0;
      margin-top: 30px;
      span:last-child {
        text-align: right;
        line-height: 16px;
      }
    }
    .btn {
      width: 142px;
      height: 28px;
      font-size: 16px;
      margin: 40px auto 0;
    }
  }
  .empty {
    margin: 0;
    padding: 0;
    height: 1px;
    visibility: hidden;
  }
}
@media screen and (max-width: 750px) {
  .list {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
    li {
      width: 80%;
      margin-bottom: 0.6rem;
      h2 {
        height: auto;
        margin-bottom: 0.2rem;
        text-align: center;
      }
      .box {
        height: auto;
      }
    }
  }
}
</style>
