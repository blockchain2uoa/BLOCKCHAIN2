This is a simple example project that shows how to spin up an ethereum dap and how all of the project pieces should fit together. I have included an example smart contract for storing of hashes on the blockchain.

Rather than connecting to testnet or mainnet for ethereum I am using Ganache to spin up a private blockchain network on my PC as it simplifies the process of testing.

https://www.trufflesuite.com/ganache

https://metamask.io/

Please note that for this project I am using truffle network version 5.0.2

Make sure to download Ganache and run it and choose `QUICKSTART ETHEREUM`

In order to make running Truffle commands easier run this line  
`alias truffle="./node_modules/.bin/truffle"`  

To deploy smart contact to ganache you must first compile the smart contracts  
`truffle compile`  

This is then followed by a migrate command to send the smart contract to ganache  
`truffle migrate --reset`  

You can interact with the smart contracts without a web app for now by using console  
`truffle console`  
`hashList = await HashList.deploy()`  
`hashList`  

These commands will show the information about the smart contract that you just deployed  
