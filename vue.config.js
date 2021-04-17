// const WebpackBundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    // plugins: [new WebpackBundleAnalyzerPlugin()],
    externals: {
      vue: "Vue",
      // echarts: "echarts",
      "element-ui": "ELEMENT",
      "vue-router": "VueRouter",
      "vue-i18n": "VueI18n",
      "web3": "Web3",
      // ethers: "ethers",
      // tronweb: "TronWeb",
    },
  },
};
