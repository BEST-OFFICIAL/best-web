<template>
  <div class="loading">
    <i class="icon-loading" v-show="status" :style="sizeStyle"></i>
    <div v-show="!status">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["status", "size"],
  computed: {
    sizeStyle() {
      var size = this.size ? this.size + "px" : "24px";
      return { width: size, height: size };
    },
  },
};
</script>
<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-loading {
  display: inline-block;
  background: url("~@/assets/images/loading.gif") no-repeat center;
  background-size: 100% 100%;
}
</style>
