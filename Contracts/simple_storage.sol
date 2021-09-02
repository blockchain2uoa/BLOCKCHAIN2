pragma solidity >=0.7.0 <0.9.0;

//This contract is for a simple store operation
//Also, it is just a practice
contract Store {
    uint Data;
    
    //save the data
    function save(uint num) public {
        Data = num;
    }

    //get the data
    function get() public view returns (uint){
        return Data;
    }
}
