// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

/**
* A simple piggybank contract to store ether that selfdestructs when the owner withdraws the funds
*/
contract PiggyBank{

    address public owner = msg.sender;
    receive() external payable{} // use to receive ether

    function withdraw() external payable {
        require(msg.sender == owner,"not owner"); // only contract creator can withdraw
        selfdestruct(payable(msg.sender)); // payment send to owner and contract will destroy like conventional piggy bank
    }

}
