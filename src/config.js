var mode = "product"
  // process.env.NODE_ENV;

export var btcAddress =
  mode == "development"
    ? "0x37a310a4ab76280F9991208B1E45a37aD364Da16"
    : "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c";
export var ethAddress =
  mode == "development"
    ? "0xE680AED467fcab8A1249CDfb36853D901a315eE1"
    : "0x2170Ed0880ac9A755fd29B2688956BD959F933F8";
export var usdtAddress =
  mode == "development"
    ? "0x2c28BA23338211B3b363A910b3F257Bf97fCa504"
    : "0x55d398326f99059fF775485246999027B3197955";

export var bestAddress =
  mode == "development"
    ? "0x6DBda0F1F8EB8B359991a4CE0D6D9F7bE9eE71a8"
    : "0x7C86085332482654D31De8576eFDEf0E25284b9e";
export var muskAddress =
  mode == "development"
    ? "0x9Cf75c86d7A7565657bDEE14583D274855B83C2c"
    : "0x13fB5Df6E37430248BFADd5a4EFf52A5a7B160b9";
export var bestHusdLpAddress =
  mode == "development"
    ? "0x2c28BA23338211B3b363A910b3F257Bf97fCa504"
    : "0x9eD390f2dcee8F4Fb80Bc3f7608f1690c455DD8B";
export var muskHusdLpAddress =
  mode == "development"
    ? "0xB13B54263BcA4Bd07dD932af515771bc675Eef5a"
    : "0x77b447D0F17cdd135f56fA84180917B16F7ab2B1";

export var bestPoolAddress =
  mode == "development"
    ? "0x7D6FA26A78a27eb5c3b5432F294504d24D42BBEB"
    : "0xAc6E9901afb8b688cE9bdC34B8c1AEb6B4737Ea9";

export var bestHusdLpPoolAddress =
  mode == "development"
    ? "0xb45755B3Bf87Af636db8A9335b3Dc1e0e34C82Ff"
    : "0xF6e87bB3941DcFE6cF5cf3fFD0143591B7848ed2";

export var muskHusdLpPoolAddress =
  mode == "development"
    ? "0xC82C910954636338d7Fd4521e0206c212C4a3a2c"
    : "0x485BD8005b118C91FFEe8c3DAC275af380ac0be3";

export var providerAddress =
  mode == "development"
    ? "https://data-seed-prebsc-1-s1.binance.org:8545/"
    : "https://bsc-dataseed1.binance.org/";
