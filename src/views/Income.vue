<template>
  <div class="income-page">
    <ul class="list">
      <li>
        <h2>{{$t('全网挖矿数据')}}</h2>
        <div class="box">
          <h3>BTC</h3>
          <div class="item">
            <span>{{$t('当前价格')}}</span>
            <span>48888.88 USD</span>
          </div>
          <div class="item">
            <span>{{$t('全网难度')}}</span>
            <span>21.43 T</span>
          </div>
          <div class="item">
            <span>
              {{$t('全网算力')}}
              <Tips>
                {{$t('最近一天平均算力')}} 171.40 EH/S
                <br />
                {{$t('最近三天平均算力')}} 171.40 EH/S
                <br />
                {{$t('最近七天平均算力')}} 171.40 EH/S
              </Tips>
            </span>
            <span>158.46 EH/s</span>
          </div>
          <div class="item">
            <span>
              {{$t('每T收益')}}
              <Tips>
                {{$t('数据来自F2pool.com')}}
              </Tips>
            </span>
            <span>0.00000534 BTC/Day</span>
          </div>
        </div>
      </li>
      <li>
        <h2></h2>
        <div class="box">
          <h3>ETH</h3>
          <div class="item">
            <span>{{$t('当前价格')}}</span>
            <span>1888.88 USD</span>
          </div>
          <div class="item">
            <span>{{$t('全网难度')}}</span>
            <span>5,020.06 TH</span>
          </div>
          <div class="item">
            <span>
              {{$t('全网算力')}}

              <Tips>
                {{$t('最近一天平均算力')}} 171.40 EH/S
                <br />
                {{$t('最近三天平均算力')}} 171.40 EH/S
                <br />
                {{$t('最近七天平均算力')}} 171.40 EH/S
              </Tips>
            </span>
            <span>394,080.86 GH/s</span>
          </div>
          <div class="item">
            <span>
              {{$t('每T收益')}}
              <Tips>
                {{$t('数据来自F2pool.com')}}
              </Tips>
            </span>
            <span>0.00000534 ETH/Day</span>
          </div>
        </div>
      </li>
      <li>
        <h2>{{$t('BEST数据')}}</h2>
        <div class="box">
          <h3>BEST</h3>
          <div class="item">
            <span>{{$t('当前价格')}}</span>
            <span>28.88 USDT</span>
          </div>
          <div class="item">
            <span>
              {{$t('质押总量')}}
            </span>
            <span>50,020</span>
          </div>
          <div class="item">
            <span>
              {{$t('质押年化收益')}}
              <Tips>
                {{$t('年化收益=当日单BEST收益 × 当日 BTC或ETH价格 / BEST币价 × 365')}}
              </Tips>
            </span>
            <span>165%</span>
          </div>
          <div class="item">
            <span>
              {{$t('质押收益/天')}}
              <Tips>
                {{$t('根据全网挖矿数据减去2.5%鱼池矿池手续费计算')}}
              </Tips>
            </span>
            <span>
              0.00000534 ETH<br />
              +0.00000534 BTC
            </span>
          </div>
          <div class="btn btn-yellow">{{$t('去交易')}}</div>
        </div>
      </li>
      <li>
        <h2>{{$t('MUSK数据')}}</h2>
        <div class="box">
          <h3>MUSK</h3>
          <div class="item">
            <span>{{$t('当前价格')}}</span>
            <span>28.88 USDT</span>
          </div>
          <div class="item">
            <span>{{$t('质押总量')}}</span>
            <span>50,020</span>
          </div>
          <div class="item">
            <span>
              {{$t('质押年化收益')}}
              <Tips>
                {{$t('年化收益=当日单BEST收益 × 当日 BTC或ETH价格 / BEST币价 × 365')}}
              </Tips>
            </span>
            <span>165%</span>
          </div>
          <div class="item">
            <span>
              {{$t('质押收益/天')}}
              <Tips>
                {{$t('根据全网挖矿数据减去2.5%鱼池矿池手续费计算')}}
              </Tips>
            </span>
            <span>
              0.00000534 ETH<br />
              +0.00000534 BTC
            </span>
          </div>
          <div class="btn btn-yellow">{{$t('去交易')}}</div>
        </div>
      </li>
      <li>
        <h2>{{$t('矿机参数')}}</h2>
        <div class="box">
          <h3>{{$t('BTC矿机')}}</h3>
          <div class="item">
            <span>{{$t('功耗比')}} </span>
            <span>48.0W/T</span>
          </div>
          <div class="item">
            <span>
              {{$t('电费单价')}}
            </span>
            <span>$0.06/{{$t('度')}}</span>
          </div>
          <div class="item">
            <span>
              {{$t('矿机折旧费率')}}
              <!-- <Tips>
              </Tips> -->
            </span>
            <span>10%</span>
          </div>
          <div class="item">
            <span>
              {{$t('矿机每T净收益')}}
              <Tips>
                {{$t('根据全网挖矿数据减去2.5%鱼池矿池手续费计算')}}
              </Tips>
            </span>
            <span>
              0.000003 BTC/Day
            </span>
          </div>
          <div class="btn btn-yellow">{{$t('去交易')}}</div>
        </div>
      </li>
      <li>
        <h2></h2>
        <div class="box">
          <h3>{{$t('ETH矿机')}}</h3>
          <div class="item">
            <span> {{$t('功耗比')}}</span>
            <span>48.0W/T</span>
          </div>
          <div class="item">
            <span>
              {{$t('电费单价')}}
            </span>
            <span>$0.06/{{$t('度')}}</span>
          </div>
          <div class="item">
            <span>
              {{$t('矿机折旧费率')}}
            </span>
            <span>10%</span>
          </div>
          <div class="item">
            <span>
              {{$t('矿机每T净收益')}}
              <Tips>
                {{$t('根据全网挖矿数据减去2.5%鱼池矿池手续费计算')}}
              </Tips>
            </span>
            <span>
              0.000003 BTC/Day
            </span>
          </div>
          <div class="btn btn-yellow">{{$t('去交易')}}</div>
        </div>
      </li>
      <li class="empty"></li>
      <li class="empty"></li>
      <li class="empty"></li>
      <li class="empty"></li>
    </ul>
    <Income />
  </div>
</template>
<script>
import Tips from "@/components/Tips";
import Income from "@/components/Income";
export default {
  components: { Tips, Income },
};
</script>
<style lang="scss" scoped>
.income-page {
  padding-top: 163px;
  padding-bottom: 77px;
}
.list {
  display: flex;
  width: 1200px;
  margin: 0 auto 50px;
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
    height: 382px;
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
  .income-page {
    padding-top: 0.6rem;
    padding-bottom: 0.7rem;
  }
  .list {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
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
