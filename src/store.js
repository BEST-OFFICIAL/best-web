import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    web3: null,
    userAddress: null,
    bestContract: null,
    mineContract: null,
    MINE_BEST_F2pool: null,
  },
  getters: {
    shortUserAddress(state) {
      var address = state.userAddress;
      if (address) {
        return `${address.substr(0, 5)}...${address.substr(-3, 3)}`;
      } else {
        return "";
      }
    },
  },
  mutations: {
    web3(state, value) {
      state.web3 = value;
    },
    userAddress(state, value) {
      state.userAddress = value;
      sessionStorage.userAddress = value;
    },
    mineContract(state, value) {
      state.mineContract = value;
    },
    bestContract(state, value) {
      state.bestContract = value;
    },
  },
});
