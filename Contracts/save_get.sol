pragma solidity >=0.7.0 <0.9.0;

//This contract is for saving and retrieving file
contract Store {

    mapping(uint => string) files;
    uint idx = 0;
    //save the file
    function save(string hash) public {
        files[idx++] = hash;
    }

    //get the file
    function get(uint id) public view returns (string){
        return files[id];
    }
}
