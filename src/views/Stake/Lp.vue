<template>
  <div>
    <Stake name="BEST-USDT LP" :data="bestHusdtLp" />
    <Stake name="MUSK-USDT LP" :data="muskHusdtLp" :noFreeze="true" />
  </div>
</template>
<script>
import BestHusdtLpPool from "@/contract/BestHusdtLpPool";
import BestHusdtLp from "@/contract/BestHusdtLp";

import MuskHusdtLpPool from "@/contract/MuskHusdtLpPool";
import MuskHusdtLp from "@/contract/MuskHusdtLp";

import Stake from "@/components/Stake";

export default {
  components: { Stake },
  data() {
    return {
      bestHusdtLp: {
        pool: new BestHusdtLpPool(),
        token: new BestHusdtLp(),
        title: '质押 BEST-USDT LP',
        unit: "BEST-USDT LP",
        apy: "111%",
        earned: "BTCB + BETH + MUSK",
        isLP: true,
        rewardMap: {
          musk: true,
        }
      },
      muskHusdtLp: {
        pool: new MuskHusdtLpPool(),
        token: new MuskHusdtLp(),
        title: '质押 MUSK-USDT LP',
        unit: "MUSK-USDT LP",
        apy: "111%",
        earned: "MUSK",
        isLP: true,
        rewardMap: {
          musk: true,
        }
      },
    };
  },
};
</script>
