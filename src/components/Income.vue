<template>
  <div class="income" id="income" :class="$i18n.locale">
    <Title> {{$t('预估收益')}}</Title>
    <h4>
      {{$t('预估收益文字')}}
    </h4>
    <ul>
      <li data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
        <p>
          {{$t('当BTC美金',{amount: '50,000'})}}<br />
          {{$t('当ETH美金',{amount:'1,900'})}}<br />
          {{$t('的收益率为')}}
        </p>
        <!-- <img src="~@/assets/images/p1.png" alt="" /> -->
        <div class="number">65%</div>
      </li>
      <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
        <p>
          {{$t('当BTC美金',{amount: '100,000'})}}<br />
          {{$t('当ETH美金',{amount:'5,000'})}}<br />
          {{$t('的收益率为')}}
        </p>
        <!-- <img src="~@/assets/images/p2.png" alt="" /> -->
        <div class="number">151%</div>
      </li>
      <li data-scroll="toggle(.fromRightIn, .fromRightOut)">
        <p>
          {{$t('当BTC美金',{amount: '300,000'})}}<br />
          {{$t('当ETH美金',{amount:'30,000'})}}<br />
          {{$t('的收益率为')}}
        </p>
        <!-- <img src="~@/assets/images/p3.png" alt="" /> -->
        <div class="number">730%</div>
      </li>
    </ul>
    <div class="small">
      {{$t('收益文字1')}}
      <br />
      {{$t('收益文字2')}}
    </div>
  </div>
</template>
<script>
import Title from "@/components/Title";

export default {
  components: {
    Title,
  },
  mounted() {
    new window.ScrollTrigger({
      addHeight: true,
    });
  },
};
</script>
<style lang="scss" scoped>
.income {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    width: 725px;
    margin-top: 58px;
    margin-bottom: 40px;
    opacity: 0.87;
    font-size: 16px;
    color: #c0c4d7;
    letter-spacing: 0;
    text-align: justify;
    line-height: 30px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    li {
      min-width: 336px;
      padding-left: 10px;
      padding-right: 10px;
      height: 146px;
      background: #181d22;
      box-shadow: 0 2px 23px 0 rgba(0, 0, 0, 0.5);
      border-radius: 17px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        opacity: 0.73;
        font-size: 12px;
        color: #bcd1e5;
        letter-spacing: 0;
        text-align: right;
        line-height: 20px;
        margin-right: 15px;
      }
      img {
        width: 158px;
      }
      .number {
        font-weight: bold;
        font-size: 76px;
        color: #ff9e00;
        line-height: 1;
        letter-spacing: -5px;
      }
    }
  }
  .small {
    opacity: 0.8;
    font-size: 12px;
    color: #bcd1e5;
    letter-spacing: 0.75px;
    line-height: 26px;
    margin-top: 20px;
  }
}
@media screen and (max-width: 750px) {
  .income {
    width: 100%;
    padding-top: 0;
    &.en {
      ul li {
        p {
          min-width: 52%;
        }
        .number {
          font-size: 0.8rem;
          width: 45%;
        }
      }
    }
    h4 {
      width: 6.7rem;
      margin-top: 0.76rem;
      margin-bottom: 0.6rem;
      opacity: 1;
      font-size: 0.28rem;
      color: #d4daf2;
      line-height: 0.5rem;
    }
    ul {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 6.7rem;
      li {
        width: 100%;
        min-width: auto;
        height: 1.8rem;
        border-radius: 0.17rem;
        margin-bottom: 0.34rem;
        p {
          opacity: 0.8;
          font-size: 0.24rem;
          color: #d4daf2;
          line-height: 0.36rem;
          margin-right: 0.2rem;
          width: 45%;
        }
        img {
          width: 2.5rem;
        }
        .number {
          width: 49%;
          text-align: left;
          margin-left: 0.2rem;
          font-size: 1.1rem;
          letter-spacing: 0;
        }
      }
    }
    .small {
      width: 6.7rem;
      margin: 0.16rem auto 0;
      opacity: 0.8;
      font-size: 0.24rem;
      color: #d4daf2;
      line-height: 0.5rem;
    }
  }
}
</style>
