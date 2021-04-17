export async function linkMetamask() {
  if (typeof window.ethereum !== "undefined") {
    const ethereum = window.ethereum;
    try {
      const accounts = await ethereum.enable();

      ethereum.on("accountsChanged", function(accounts) {
        console.log("accountsChanged:" + accounts);
      });
      ethereum.on("networkChanged", function(networkVersion) {
        console.log("networkChanged:" + networkVersion);
      });
      return accounts[0];
    } catch (e) {
      console.log(e);
    }
  } else {
    alert("您尚未安装钱包插件");
  }
}