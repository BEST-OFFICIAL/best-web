<template>
  <ul class="tab">
    <li :class="{ active: tab == 1 }" @click="change(1)">BSC</li>
    <li :class="{ active: tab == 2 }" @click="change(2)">ETH</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      tab: sessionStorage.tab || 1,
    };
  },
  methods: {
    change(active) {
      this.tab = active;
      sessionStorage.tab = active;
      this.$emit("change", active);
    },
  },
};
</script>
<style lang="scss" scoped>
.tab {
  width: 300px;
  height: 44px;
  border: 1px solid #945919;
  display: flex;
  border-radius: 22px;
  background-image: linear-gradient(
    90deg,
    rgba($color: #f6c51e, $alpha: 0.3) 7%,
    rgba($color: #f26e19, $alpha: 0.3) 89%
  );
  li {
    flex: 1 1 auto;
    border-radius: 22px;
    font-size: 20px;
    color: #ffffff;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &.active {
      opacity: 1;
      background-image: linear-gradient(90deg, #f6c51e 7%, #f26e19 89%);
    }
  }
}
@media screen and (max-width: 750px) {
  .tab {
    width: 6rem;
    height: 0.88rem;
    border-radius: 0.44rem;
    li {
      font-size: 0.4rem;
      border-radius: 0.44rem;
    }
  }
}
</style>
