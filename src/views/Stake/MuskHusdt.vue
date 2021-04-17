<template>
  <div>
    <Stake :name="name" :data="muskHusdtLp" @change="change" />
  </div>
</template>
<script>
import MuskHusdtLpPool from "@/contract/MuskHusdtLpPool";
import MuskHusdtLp from "@/contract/MuskHusdtLp";

import Stake from "@/components/Stake";

export default {
  components: { Stake },
  data() {
    return {
      name: 'MUSK-USDT LP',
      muskHusdtLp: {
        pool: new MuskHusdtLpPool(),
        token: new MuskHusdtLp(),
        unit: "MUSK-USDT LP",
        apy: "111%",
        earned: "MUSK",
        isLP: true,
      },
    };
  },
  methods: {
    change(active) {
      if (active == 1) {
        this.muskHusdtLp.unit = "MUSK-USDT LP";
        this.name = "MUSK-USDT LP";
      } else {
        this.muskHusdtLp.unit = "MUSK-USDT LP";
        this.name = "MUSK-USDT LP";
      }
    },
  },
};
</script>
