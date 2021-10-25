import web3 from './web3';
import TheInstance from './build/contracts/HashList.json';

// Tell the web3 instance of contract is deployed to ether network 
// Get the ABI contract interface and its deployed address

const instance = new web3.eth.Contract(
    JSON.parse(TheInstance.interface),
    // '0x4791EA045Cf037F3cf290022D4B17d82993598C0'
    // pass the smart contract's adrdress here
);

export default instance;

