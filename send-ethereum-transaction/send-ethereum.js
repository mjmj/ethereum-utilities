if (process.env.PKEY && process.env.INFURA_ACCESS_TOKEN) {
    var mainnet = "https://mainnet.infura.io/" + (process.env.INFURA_ACCESS_TOKEN)
    var testnet = "https://ropsten.infura.io/" + (process.env.INFURA_ACCESS_TOKEN)
    var pkey1 = (process.env.PKEY)
  } else {
    throw Error('environment variables INFURA_ACCESS_TOKEN or PKEY not set')
}

var Web3 = require("web3")
var EthTx = require("ethereumjs-tx")
var web3 = new Web3(new Web3.providers.HttpProvider(mainnet))

var addr1 = "0x59ca0e84a5a2fded343104733120f88023c3b41b"
var addr2 = "0x2c32fb487da2ee0485b9ce8d3edc982e04ca0973"

console.log(web3.utils.toHex(web3.eth.getTransactionCount(addr1)))

var rawTx = {
    nonce: web3.utils.toHex(web3.eth.getTransactionCount(addr1)),
    to: addr2,
    gasPrice: web3.utils.toHex(21000000000),
    gasLimit: web3.utils.toHex(21000),
    value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
    data: ""
}

var pkey1x = new Buffer(pkey1, 'hex')
var tx = new EthTx(rawTx)
tx.sign(pkey1x)

var serializedTx = `0x${tx.serialize().toString('hex')}`
console.log(serializedTx)
