//SPDX-License-Identifier: MIT
//Open Source : MIT
//Closed Source:UNLICENSED 
//Tells what version of Solidity to use
pragma solidity ^0.8.0;
//Import ERC20 Contract from OpenZepplin
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
contract TokenName is ERC20 {
    //Need to call constructor present in ERC20 contract
    //constructor(string memory _name, string memory _symbol) ERC20(_name,_symbol)
    constructor() ERC20("TOKEN_NAME","TKN") {
        //msg.sender is the person deploying the contract
        _mint(msg.sender, 1000*(10**18));
    }
    function mint() public{
        //Using this fuction will let you mint a 1000 Tokens
        _mint(msg.sender, 1000*(10**18)); 
    }
    
}
