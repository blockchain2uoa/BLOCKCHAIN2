var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = '';
const INFURA = 'https://ropsten.infura.io/v3/d3a8c27b8847423fb141bfdca9ba2ac1'

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, INFURA)
      },
      network_id: 3,
      gas:4000000  
    }
  }
};