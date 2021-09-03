pragma solidity >=0.7.0 <0.9.0;

contract transaction {
    //user balance: address -> amount
    mapping (address => uint) public balances;
    event Sent(address sender, address receiver, uint amount);

    //check the amount which the sender is willing to send is not exceeding the balance 
    modifier check_amount(uint num) {
    if (balances[msg.sender] >= num) _;
    }
    
    //transfer function with the modifier
    function transfer(uint amount, address receiver) check_amount(amount) {
        //sender
        balances[msg.sender] -= amount;
        //reciever gets the coins
        balances[receiver] += amount;
        emit Sent(msg.sender, receiver, amount);
    }
}
