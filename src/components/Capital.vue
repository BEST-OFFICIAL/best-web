<template>
  <div class="capital-pic">
    <img
      data-scroll="toggle(.fromTopIn, .fromTopOut)"
      src="~@/assets/images/capital-1.png"
      alt=""
      class="icon-1"
    />
    <img
      data-scroll="toggle(.fromTopIn, .fromTopOut)"
      src="~@/assets/images/capital-2.png"
      alt=""
      class="icon-2"
    />
    <img
      data-scroll="toggle(.fromTopIn, .fromTopOut)"
      src="~@/assets/images/capital-2.png"
      alt=""
      class="icon-3"
    />
    <img
      data-scroll="toggle(.fromTopIn, .fromTopOut)"
      src="~@/assets/images/capital-2.png"
      alt=""
      class="icon-4"
    />
    <img
      data-scroll="toggle(.fromTopIn, .fromTopOut)"
      src="~@/assets/images/capital-2.png"
      alt=""
      class="icon-5"
    />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.capital-pic {
  width: 570px;
  height: 403px;
  flex-shrink: 0;
  background: url("~@/assets/images/capital-bottom.png") no-repeat center;
  position: relative;
  .icon-1 {
    position: absolute;
    width: 18.24%;
    top: 37.71%;
    left: 32.98%;
  }
  .icon-2 {
    position: absolute;
    width: 14.38%;
    top: 58.06%;
    left: 1px;
  }
  .icon-3 {
    position: absolute;
    width: 14.38%;
    top: 13.39%;
    left: 14.91%;
  }
  .icon-4 {
    position: absolute;
    width: 14.38%;
    top: 18.59%;
    left: 65.71%;
  }
  .icon-5 {
    position: absolute;
    width: 14.38%;
    top: 68.23%;
    left: 53.68%;
  }
}
@media screen and (max-width: 750px) {
  .capital-pic{
    display: none;
  }
}
</style>
