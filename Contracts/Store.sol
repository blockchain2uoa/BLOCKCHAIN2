pragma solidity ^0.4.2;

//This contract is for saving and retrieving file
contract Store {

    mapping(uint => string) files;
    uint idx = 0;
    //save the file
    function save(string hash) public {
        files[idx] = hash;
        idx++;
    }

    //get the file
    function get(uint i) constant public  returns (string){
        return files[i];
    }
}
