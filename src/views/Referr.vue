<template>
  <div class="referr-page">
    <div class="title">{{ $t("邀请好友") }}</div>
    <div class="referr-box">
      <div class="item top">
        <div class="link-box">
          <div class="link-title">{{ $t("邀请链接") }}</div>
          <div class="link">{{ referrLink }}</div>
        </div>
        <div
          class="btn"
          v-show="inviterID"
          v-clipboard:copy="referrLink"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >
          {{ $t("复制链接") }}
        </div>
      </div>
      <div class="item">
        <span>{{ $t("邀请人数") }}</span>
        <span>{{ inviteInfo.childCnt }}{{ $t("人") }}</span>
      </div>
      <div class="item">
        <span>{{ $t("BTC邀请收益") }}</span>
        <span class="number">{{ inviteInfo.reward.btc | token }} BTC </span>
      </div>
      <div class="item">
        <span> {{ $t("ETH邀请收益") }}</span>
        <span class="number">{{ inviteInfo.reward.eth | token }} ETH </span>
      </div>
    </div>
    <div class="faq">
      <h3>{{ $t("邀请问题") }}</h3>
      <ul>
        <li v-for="(k, index) in Array(5)" :key="index">
          <p>
            {{ $t(`questionList[${index}].title`) }}
          </p>
          <p>
            {{ $t(`questionList[${index}].content`) }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BestPool from "@/contract/BestPool";
import { mapState } from "vuex";

export default {
  data() {
    return {
      inviterID: "-",
      inviterNumber: 0,
      rewardInfo: { BTC: 0, ETH: 0 },
      bestPool: new BestPool(),
      inviteInfo: {
        reward: {},
      },
      dataTimer: "",
    };
  },
  computed: {
    ...mapState(["userAddress"]),
    referrLink() {
      var userID = this.inviterID;
      if (!userID || userID == "-") {
        return this.$t("质押后生成邀请连接");
      } else {
        return `${window.location.origin}/index/${userID}`;
      }
    },
  },
  mounted() {
    this.getDate();
  },
  destroyed() {
    clearTimeout(this.dataTimer);
  },
  watch: {
    userAddress() {
      this.getDate();
    },
  },
  methods: {
    // 获取数据
    getDate() {
      if (!this.userAddress) return;

      this.getInviteInfo();
      this.getUid();

      this.dataTimer = setTimeout(() => {
        this.getDate();
      }, 10000);
    },
    // 查询邀请信息
    async getInviteInfo() {
      this.inviteInfo = await this.bestPool.getInviteInfo();
      console.log(this.inviteInfo);
    },
    async getUid() {
      this.inviterID = await this.bestPool.getUID();
    },
    onCopy() {
      this.$message.success(this.$t("复制成功"));
    },
    onError() {
      this.$message.error(this.$t("复制失败"));
    },
  },
};
</script>
<style lang="scss" scoped>
.referr-page {
  background: url("~@/assets/images/banner2.png") no-repeat top;
}
.title {
  display: none;
}
.referr-box {
  width: 630px;
  padding: 50px 70px 30px;
  margin: 72px auto 36px;
  background: rgba($color: #0b0b0b, $alpha: 0.73);
  border: 1px solid #3d3d3d;
  border-radius: 8px;
  .item {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    border-bottom: 1px solid rgba($color: #fff, $alpha: 0.05);
    > div {
      max-width: 100%;
    }
    span:first-child {
      font-size: 18px;
    }
    span:last-child {
      font-size: 24px;
    }
    &:last-child {
      border-bottom: 0;
    }
  }
  .top {
    height: auto;
    padding-bottom: 28px;
  }
  .link-title {
    font-size: 18px;
    color: #fff;
    font-weight: bold;
  }
  .link {
    opacity: 0.6;
    font-size: 14px;
    color: #c8d7eb;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .btn {
    width: 120px;
    height: 32px;
    font-size: 14px;
    color: #fe8c00;
  }
}
.faq {
  width: 630px;
  margin: 0 auto;
  padding: 0 10px;
  margin-top: 36px;
  h3 {
    opacity: 0.76;
    font-size: 18px;
    color: #c8d7eb;
    letter-spacing: 0;
    font-weight: 700;
    margin-bottom: 30px;
  }
  li {
    margin-bottom: 40px;
  }
  p {
    opacity: 0.9;
    font-size: 16px;
    color: #fff;
    line-height: 27px;
    &:last-child {
      opacity: 0.74;
      padding-left: 16px;
      color: #c8d7eb;
    }
  }
}
h3 {
  opacity: 0.76;
  font-size: 18px;
  color: #c8d7eb;
  font-weight: 700;
}

@media screen and (max-width: 745px) {
  .title {
    font-size: 0.44rem;
    font-weight: bold;
    display: block;
    padding-top: 0.8rem;
    color: #fff;
    padding-left: 0.4rem;
  }
  .referr-box {
    width: 6.9rem;
    padding: 0.1rem 0.6rem;
    margin: 0.35rem auto 0;
    display: flex;
    flex-direction: column;
    .item {
      order: 1;
      position: relative;
      height: 1.3rem;
      &:last-child {
        border-bottom: 1px solid rgba($color: #fff, $alpha: 0.05);
      }
      span:first-child {
        font-size: 0.28rem;
      }
      span:last-child {
        font-size: 0.4rem;
      }
    }
    .item.top {
      order: 2;
      height: auto;
      flex-direction: column;
      .link-box {
        display: flex;
        width: 100%;
        height: 1.3rem;
        justify-content: space-between;
        align-items: center;
        .link {
          margin-top: 0;
        }
      }

      .btn {
        width: 3.87rem;
        height: 0.8rem;
        font-size: 0.34rem;
        margin-top: 0.4rem;
        border-radius: 0.4rem;
      }
    }
    span {
      font-size: 0.28rem;
    }
    .link-title {
      font-size: 0.3rem;
    }
    .link {
      font-size: 0.24rem;
      margin-top: 0.2rem;
    }
  }
  .faq {
    width: 6.7rem;
    padding: 0;
    margin: 0.9rem auto 0;
    h3 {
      font-size: 0.36rem;
      margin-bottom: 0.35rem;
    }
    li {
      margin-bottom: 0.4rem;
    }
    p {
      margin-bottom: 0.1rem;
      font-size: 0.32rem;
      line-height: 0.44rem;
      &:last-child {
        line-height: 0.54rem;
        padding-left: 0.3rem;
      }
    }
  }
}
</style>
