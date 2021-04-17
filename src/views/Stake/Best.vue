<template>
  <div>
    <Stake :name="$t('算力币BEST')" :data="best">
    </Stake>
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
        title: `BTC+ETH`,
        unit: "BEST",
        apy: "111%",
        earned: "BTCB + BETH",
        logo: require("@/assets/images/icon-best2.png"),
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.token-logo {
  width: 104px;
  height: 104px;
  background: #d8d8d8;
  border-radius: 50%;
  margin-right: 36px;
}

@media screen and (max-width: 750px) {
  .token-logo {
    width: 1.36rem;
    height: 1.36rem;
    margin-right: 0.3rem;
    flex: 1 0 auto;
  }
}
</style>
