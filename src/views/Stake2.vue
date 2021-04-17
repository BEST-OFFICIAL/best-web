<template>
  <div class="stake-page">
    <Stake :name="$t('算力币BEST')" :data="best" />
  </div>
</template>
<script>
import BestPool from "@/contract/BestPool";
import Best from "@/contract/Best";

import Stake from "@/components/Stake";

export default {
  components: { Stake },
  data() {
    return {
      best: {
        pool: new BestPool(),
        token: new Best(),
        title: `BTC+ETH ${this.$t("金矿")}`,
        unit: "BEST",
        apy: "111%",
        earned: "BTCB + BETH",
        rewardMap: {
          btc: true,
          eth: true,
        },
      },
    };
  },
};
</script>
<style scoped>
.stake-page {
  background: #121518 url("~@/assets/images/banner.png") no-repeat top;
}
</style>
