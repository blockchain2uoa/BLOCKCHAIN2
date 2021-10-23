const HashList = artifacts.require("HashList.sol");

module.exports = function(deployer) {
  deployer.deploy(HashList);
};