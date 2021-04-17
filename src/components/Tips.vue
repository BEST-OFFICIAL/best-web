<template>
  <div class="tips">
    <div class="icon">!</div>
    <div class="content">
      <div class="box">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tips {
  position: relative;
  vertical-align: middle;
  display: inline-block;
  cursor: pointer;
  &:hover {
    .content {
      display: block;
    }
  }
}
.icon {
  width: 14px;
  height: 14px;
  font-size: 12px;
  text-align: center;
  line-height: 12px;
  border-radius: 50%;
  color: #fff;
  border: 1px solid #fff;
  opacity: 0.5;
}
.content {
  padding-left: 5px;
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 14px;
  cursor: default;
  z-index: 10;
}
.box {
  background: #19222e;
  border: 1px solid #263647;
  box-shadow: 0 2px 23px 0 rgba(0, 0, 0, 0.19);
  padding: 10px 14px;
  // white-space: nowrap;
  width: max-content;
  max-width: 240px;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0.8px;
  line-height: 18px;
}
@media screen and (max-width: 750px) {
  .content {
    top: 14px;
    left: -60px;
    padding-left: 0;
    padding-top: 10px;
    transform: translateY(0);
  }
}
</style>
