var ethers = require("ethers");
const AbiCoder = ethers.utils.AbiCoder;
// const ADDRESS_PREFIX_REGEX = /^(41)/;
const ADDRESS_PREFIX = "41";

// 调用合约接口（send方式）
export function triggerSmartContract(contractAddress, funcs, params) {
  var tronWeb = window.tronWeb;

  return tronWeb.transactionBuilder
    .triggerSmartContract(
      tronWeb.address.toHex(contractAddress),
      funcs,
      {},
      params,
      tronWeb.defaultAddress.hex
    )
    .then(function(res) {
      return tronWeb.trx.sign(res.transaction);
    })
    .then((res) => {
      return tronWeb.trx.sendRawTransaction(res);
    });
}

// 调用合约接口（call方式）
export function triggerConstantContract(contractAddress, funcs, params) {
  var tronWeb = window.tronWeb;

  return tronWeb.transactionBuilder
    .triggerConstantContract(
      tronWeb.address.toHex(contractAddress),
      funcs,
      {},
      params,
      tronWeb.defaultAddress.hex
    )
    .then(async (res) => {
      res = await decodeParams(
        ["uint256"],
        "0x" + res.constant_result[0],
        false
      );
      return res[0];
    });
}

//types:参数类型列表，如果函数有多个返回值，列表中类型的顺序应该符合定义的顺序
//output: 解码前的数据
//ignoreMethodHash：对函数返回值解码，ignoreMethodHash填写false，如果是对gettransactionbyid结果中的data字段解码时，ignoreMethodHash填写true

export async function decodeParams(types, output, ignoreMethodHash) {
  if (!output || typeof output === "boolean") {
    ignoreMethodHash = output;
    output = types;
  }

  if (ignoreMethodHash && output.replace(/^0x/, "").length % 64 === 8)
    output = "0x" + output.replace(/^0x/, "").substring(8);

  const abiCoder = new AbiCoder();

  if (output.replace(/^0x/, "").length % 64)
    throw new Error(
      "The encoded string is not valid. Its length must be a multiple of 64."
    );
  return abiCoder.decode(types, output).reduce((obj, arg, index) => {
    if (types[index] == "address")
      arg = ADDRESS_PREFIX + arg.substr(2).toLowerCase();
    obj.push(arg);
    return obj;
  }, []);
}
// fmt "yyyy-MM-dd hh:mm:ss"
export function formatDate(date, fmt = "yyyy-MM-dd hh:mm:ss") {
  date = date || new Date();

  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
}

export function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}
