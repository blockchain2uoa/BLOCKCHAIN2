// var HDWalletProvider = require("truffle-hdwallet-provider");
// const MNEMONIC = '';
// const INFURA = 'https://ropsten.infura.io/v3/d3a8c27b8847423fb141bfdca9ba2ac1'

// module.exports = {
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 7545,
//       network_id: "*"
//     },
//     ropsten: {
//       provider: function() {
//         return new HDWalletProvider(MNEMONIC, INFURA)
//       },
//       network_id: 3,
//       gas:4000000  
//     }
//   }
// };


// import Web3 from "web3";
 
// let web3;
 
// if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {

//   // We are in the browser and metamask is running.
//   window.ethereum.request({ method: "eth_requestAccounts" });
//   web3 = new Web3(window.ethereum);

// } else {

//   // We are on the server *OR* the user is not running metamask
//   const provider = new Web3.providers.HttpProvider(
//     "https://rinkeby.infura.io/v3/34c7c335e4d54134a96e361c7e814e92"
//   );
//   web3 = new Web3(provider);
// }

// export default web3;


// {
//   "dependencies": {
//     "mocha": "^9.1.3",
//     "solc": "^0.8.9",
//     "truffle-hdwallet-provider": "^1.0.17",
//     "web3": "^1.6.0"
//   }

// \"npm run contract\" \"npm run client:build\"
// }
