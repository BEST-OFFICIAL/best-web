import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home2";
import Income from "@/views/Income";
import stakeBest from "@/views/Stake/Best";
import stakeBestHusdt from "@/views/Stake/BestHusdt";
import stakeMuskHusdt from "@/views/Stake/MuskHusdt";
import Referr from "@/views/Referr";
import Donation from "@/views/Donation";
// import Lp from "@/views/Stake/Lp";
// import Game from "@/views/Game";
import Introduce from "../views/Introduce";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/index/:inviterId?",
      component: Home,
    },
    {
      path: "/income",
      component: Income,
    },
    {
      path: "/introduce",
      component: Introduce,
    },
    {
      path: "/stake",
      redirect: "/stake/best",
    },
    {
      path: "/stake/best",
      component: stakeBest,
    },
    {
      path: "/stake/best/lp",
      component: stakeBestHusdt,
    },
    {
      path: "/stake/musk/lp",
      component: stakeMuskHusdt,
    },
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/invitation",
      component: Referr,
    }, 
    {
      path: "/donation",
      component: Donation,

    }
  ],
  scrollBehavior(to /*, from, savedPosition*/) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    } else {
      document.documentElement.scrollTop = 0;
    }
  },
});
