import Vue from "vue";
import VueI18n from "vue-i18n";
import zh from "./lang/zh.js";
import en from "./lang/en.js";

Vue.use(VueI18n);

let locale = localStorage.locale || "en";
const i18n = new VueI18n({
  locale: locale,
  messages: {
    en,
    zh,
  },
});

export default i18n;
