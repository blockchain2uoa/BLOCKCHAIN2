pragma solidity ^0.5.0;

contract HashList {
    
    //Keeps track of the number of hashes stored in the smart contact
    uint public hashCount = 0;

    /*
    * A data structure defining the what makes up a hash
    *
    *   id - is the id of the hash
    *   hash_data - is the actual hash string
    */
    struct Hash
    {
        uint id;
        string hash_data;
    }

    //The hash table stores all the hash values
    mapping(uint => Hash) public hash_table;

    //The constructor is just creating a 'hello world' hash for testing
    constructor() public {
        createHash("Hello World");
    }

    //A smart contract function to create hashes
    function createHash(string memory _content) public {
        hashCount ++;
        hash_table[hashCount] = Hash(hashCount, _content);
    }
}