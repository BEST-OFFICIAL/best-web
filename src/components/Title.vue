<template>
  <div class="title">
    <div class="font" :class="$i18n.locale">
      <slot></slot>
    </div>
    <div class="bar"></div>
  </div>
</template>
<style lang="scss" scoped>
.title {
  display: inline-block;
  font-weight: bold;
  font-size: 40px;
  color: #ffffff;
  letter-spacing: 4px;
  position: relative;
  padding-left: 4px;
  padding-right: 2px;
  padding-bottom: 2px;
  .font {
    position: relative;
    z-index: 1;
  }
  .bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: url("~@/assets/images/title-bg.png") no-repeat center;
    background-size: 100% 100%;
  }
}
@media screen and (max-width: 750px) {
  .title {
    font-size: 0.5rem;
    padding-bottom: 1px;
    letter-spacing: 0;
    .bar {
      height: 0.1rem;
    }
  }
}
</style>
