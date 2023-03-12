// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

// import open Zeppelin ERC-20
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WETH is ERC20 {
    // create events
    event Deposit(address indexed sender, uint amount);
    event Withdraw(address indexed sender, uint amount);

    // pass name and symbol to erc-20 contructor
    constructor() ERC20("Wrape ether", "WETH") {}

    /**
     * This function will take ether as deposit and give wrapped-eth to the user
     **/
    function deposit() public payable {
        _mint(msg.sender, msg.value); // mint w-eth and send it to the user
        emit Deposit(msg.sender, msg.value); // call the event to log the data
    }

    /**
     * This function will take wrapped-eth as deposit and return eth to the user
     **/
    function withdraw(uint amount) external {
        _burn(msg.sender, amount); // destroy the wrapped-eth
        (bool success, ) = payable(msg.sender).call{value: amount}(""); // send eth to the user
        require(success, "transaction failed"); // check transaction is done successfully
        emit Withdraw(msg.sender, amount); // call the event to log the data
    }
}
