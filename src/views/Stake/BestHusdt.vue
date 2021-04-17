<template>
  <div>
    <Stake :name="name" :data="bestHusdtLp" @change="change"/>
  </div>
</template>
<script>
import BestHusdtLpPool from "@/contract/BestHusdtLpPool";
import BestHusdtLp from "@/contract/BestHusdtLp";

import Stake from "@/components/Stake";

export default {
  components: { Stake },
  data() {
    return {
      name: "BEST-USDT LP",
      bestHusdtLp: {
        pool: new BestHusdtLpPool(),
        token: new BestHusdtLp(),
        unit: "BEST-USDT LP",
        apy: "111%",
        earned: "MUSK",
        isLP: true,
      },
    };
  },
  methods: {
    change(active) {
      if(active == 1) {
        this.bestHusdtLp.unit = "BEST-USDT LP"
        this.name = "BEST-USDT LP"

      } else {
        this.bestHusdtLp.unit = "BEST-USDT LP"
        this.name = "BEST-USDT LP"
      }
    }
  },
};
</script>