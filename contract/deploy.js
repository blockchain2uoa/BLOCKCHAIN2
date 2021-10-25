const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const Compiled = require("./build/HashList.json");

const provider = new HDWalletProvider(
  "oppose civil crucial guess simple venture garden round retire innocent later tumble",
  // remember to change this to your own phrase!
  "https://rinkeby.infura.io/v3/d3a8c27b8847423fb141bfdca9ba2ac1" // blockchain2 rinkby
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(Compiled.interface)
  )
    .deploy({ data: Compiled.bytecode })
    .send({ gas: '1000000', from: accounts[0], gasPrice: '5000000000' });

  console.log("Contract deployed to", result.options.address);
};

deploy();
