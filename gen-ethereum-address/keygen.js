var EthUtil = require("ethereumjs-util")

var hexToBytes = function(hex) {
  for (var bytes = [], c = 0; c < hex.length; c+=2)
  bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}

var privateKeyToAdddress = function(privateKey) {
    return `0x${EthUtil.privateToAddress(hexToBytes(privateKey)).toString('hex')}`
}

console.log(privateKeyToAdddress(process.argv[2]))
