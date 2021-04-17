<template>
  <div class="lang" @mouseenter="show = true" @mouseleave="show = false" @click="show = true">
    <div class="icon" :class="$i18n.locale"></div>
    <span>
      {{ $i18n.locale == "zh" ? "简体中文" : "English" }}
    </span>
    <ul v-show="show">
      <li v-show="$i18n.locale == 'en'" @click.stop="switchLang('zh')">
        <div class="icon zh"></div>
        <span>简体中文</span>
      </li>
      <li v-show="$i18n.locale == 'zh'" @click.stop="switchLang('en')">
        <div class="icon en"></div>
        <span>English</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    switchLang(lang) {
      this.show = false;
      this.$i18n.locale = lang;
      localStorage.locale = lang;
    },
  },
};
</script>
<style lang="scss" scoped>
.lang {
  width: 160px;
  height: 44px;
  padding-left: 34px;
  position: relative;
  font-size: 16px;
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  .icon {
    width: 20px;
    height: 20px;
    margin-right: 6px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    &.zh {
      background-image: url("~@/assets/images/zh.svg");
    }
    &.en {
      background-image: url("~@/assets/images/en.svg");
    }
  }
  ul {
    position: absolute;
    top: 43px;
    left: 0;
    width: 100%;
    background: #1f2024;
    li {
      height: 44px;
      padding-left: 34px;
      display: flex;
      align-items: center;
      &:hover {
        background: #101115;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .lang {
    width: auto;
    height: 1rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    span {
      display: none;
    }
    .icon {
      width: 0.6rem;
      height: 0.6rem;
      margin-right: 0;
    }
    ul {
      position: absolute;
      top: 1rem;
      z-index: 999;
      li {
        height: auto;
        padding: 0.1rem 0.2rem;
      }
    }
  }
}
</style>
