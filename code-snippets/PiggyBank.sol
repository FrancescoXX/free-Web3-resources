// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;



contract PiggyBank{

    address public owner = msg.sender;
    receive() external payable{} // use to receive ethers

    function withdraw() payable external{
        require(msg.sender == owner,"not owner"); // only contract creator can withdraw
        selfdestruct(payable(msg.sender)); // payment send to owner and contract will destroy like conventional piggy bank
    }


}