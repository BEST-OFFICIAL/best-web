<template>
  <div class="info" id="info">
    <div class="left">
      <img
        data-scroll="toggle(.fromTopIn, .fromTopOut)"
        src="~@/assets/images/info-3.png"
        alt=""
        class="icon-1"
      />
      <img
        data-scroll="toggle(.fromTopIn, .fromTopOut)"
        src="~@/assets/images/info-1.png"
        alt=""
        class="icon-2"
      />
      <img
        data-scroll="toggle(.fromTopIn, .fromTopOut)"
        src="~@/assets/images/info-1.png"
        alt=""
        class="icon-3"
      />
      <img
        data-scroll="toggle(.fromTopIn, .fromTopOut)"
        src="~@/assets/images/info-1.png"
        alt=""
        class="icon-4"
      />
      <img
        data-scroll="toggle(.fromTopIn, .fromTopOut)"
        src="~@/assets/images/info-1.png"
        alt=""
        class="icon-5"
      />
      <img
        data-scroll="toggle(.fromTopIn, .fromTopOut)"
        src="~@/assets/images/info-2.png"
        alt=""
        class="icon-6"
      />
      <img
        data-scroll="toggle(.fromTopIn, .fromTopOut)"
        src="~@/assets/images/info-2.png"
        alt=""
        class="icon-7"
      />
    </div>
    <div class="right">
      <Title>{{ $t("项目介绍") }}</Title>
      <p>
        {{ $t("项目介绍描述") }}
      </p>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";

export default {
  components: {
    Title,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.info {
  width: 1200px;
  margin: 0 auto;
  padding-top: 180px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .left {
    width: 580px;
    height: 435px;
    flex-shrink: 0;
    background: url("~@/assets/images/info-bottom.png") no-repeat center;
    position: relative;
    .icon-1 {
      width: 21.18%;
      position: absolute;
      bottom: 56.2%;
      left: 31.21%;
    }
    .icon-2 {
      width: 22.88%;
      position: absolute;
      top: 1.12%;
      left: 9.96%;
    }
    .icon-3 {
      width: 22.88%;
      position: absolute;
      top: 3%;
      left: 50.14%;
    }
    .icon-4 {
      width: 22.88%;
      position: absolute;
      bottom: 27.06%;
      left: -3.24%;
    }
    .icon-5 {
      width: 22.88%;
      position: absolute;
      bottom: 25.83%;
      left: 50.99%;
    }
    .icon-6 {
      width: 11.55%;
      position: absolute;
      bottom: 53.75%;
      left: -0.08%;
    }
    .icon-7 {
      width: 11.55%;
      position: absolute;
      bottom: 53.75%;
      left: 66.66%;
    }
  }
  .right {
    flex: 1;
    margin-left: 44px;
  }
  p {
    margin-top: 50px;
    opacity: 0.87;
    font-size: 16px;
    color: #c0c4d7;
    letter-spacing: 0;
    line-height: 34px;
  }
}

@media screen and (max-width: 750px) {
  .info {
    width: 100%;
    padding-top: 0;
    flex-wrap: wrap;
    flex-direction: column;
    .left {
      margin: 0.5rem auto 0;
      transform: translateX(0.4rem);
      width: 85%;
      height: 4.85rem;
      background-size: contain;
    }
    .right {
      margin: 0.2rem auto 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    p {
      width: 6.7rem;
      margin-top: 0.3rem;
      font-size: 0.28rem;
      line-height: 0.5rem;
    }
  }
}
</style>
