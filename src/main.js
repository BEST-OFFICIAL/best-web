import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/base.scss";
import "@/assets/css/animation.css";
import VueClipboard from "vue-clipboard2";
import router from "@/router";
import store from "@/store";
import i18n from "@/i18n";
import ElementUI from "element-ui";
import { Notification } from "element-ui";

Vue.use(VueClipboard);
Vue.use(ElementUI);
Vue.filter("cutdownTime", (endTime) => {
  if (isNaN(endTime) || endTime <= 0) return "-";
  var h, m, s;
  if (endTime <= 0) return "0:0:0";
  h = Math.floor(endTime / 3600);
  m = Math.floor((endTime % 3600) / 60);
  s = endTime % 60;
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  return h + ":" + m + ":" + s;
});
Vue.filter("shortAddress", (address) => {
  if (!address) return "";
  return `${address.substr(0, 5)}...${address.substr(-3, 3)}`;
});

Vue.filter("token", (amount, decimal) => {
  if (isNaN(amount)) return amount;
  amount = amount / Math.pow(10, 6);
  if (decimal) {
    var num = Math.pow(10, decimal);
    return Math.ceil(amount * num) / num;
  } else if (decimal === 0) {
    return parseInt(amount);
  } else {
    return amount;
  }
});
Vue.filter("NumFormat", (value) => {
  if (!value)
    return "0"; /*原来用的是Number(value).toFixed(0)，这样取整时有问题，例如0.51取整之后为1，感谢Nils指正*/
  var intPart = Number(value) | 0; //获取整数部分
  var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,"); //将整数部分逢三一断
  var floatPart = ".00"; //预定义小数部分 // console.log(888,value) // console.log(888,typeof(value))
  var value2Array = value.toString().split(".");
  var isNegtiveNo = "";
  if (intPartFormat == 0) {
    return value;
  }
  //=2表示数据有小数位
  if (value2Array.length == 2) {
    floatPart = value2Array[1].toString(); //拿到小数部分
    if (floatPart.length == 1) {
      //补0,实际上用不着
      return isNegtiveNo + intPartFormat + "." + floatPart + "0";
    } else {
      return isNegtiveNo + intPartFormat + "." + floatPart;
    }
  } else {
    return isNegtiveNo + intPartFormat;
  }
});

// Vue.use(Loading.directive);
// Vue.prototype.$loading = Loading.service;

Vue.config.productionTip = false;
Vue.prototype.$notify = {
  success(obj) {
    Notification.success(obj);
  },
  info(obj) {
    Notification.info(obj);
  },
  warning(obj) {
    Notification.warning(obj);
  },
  error(obj) {
    if (obj.error && obj.error.code == -32602) {
      obj.message = i18n.t("请先登录钱包");
      console.log(i18n.t("请先登录钱包"));
    }
    Notification.error(obj);
  },
};
// Vue.prototype.$message = Message;
// Vue.prototype.$confirm = MessageBox.confirm;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
