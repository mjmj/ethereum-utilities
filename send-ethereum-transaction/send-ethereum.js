var mainnet = "https://mainnet.infura.io/YQA9WLaI48uL3JeX375x"
var testnet = "https://ropsten.infura.io/YQA9WLaI48uL3JeX375x"

var Web3 = require("web3")
var EthTx = require("ethereumjs-tx")
var web3 = new Web3(new Web3.providers.HttpProvider(mainnet))

var addr1 = "0x59ca0e84a5a2fded343104733120f88023c3b41b"
var addr2 = "0x2c32fb487da2ee0485b9ce8d3edc982e04ca0973"

var rawTx = {
    // nonce: web3.utils.toHex(web3.eth.getTransactionCount(addr1)),
    nonce: 0,
    to: addr2,
    gasPrice: web3.utils.toHex(21000000000),
    gasLimit: web3.utils.toHex(21000),
    value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
    data: ""
}

var pkey1 = (process.env.PKEY)
var pkey1x = new Buffer(pkey1, 'hex')

var tx = new EthTx(rawTx)
tx.sign(pkey1x)

var serializedTx = `0x${tx.serialize().toString('hex')}`
console.log(serializedTx)
