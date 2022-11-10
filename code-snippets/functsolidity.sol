// SPDX-License-Identifier: MIT

pragma solidity >=0.5.0 < 0.9.0;

// A program to return the value of variables using a function 
contract nameAndAge {
    string name;
    uint age;
    
    constructor() {
        name='Gitansh';
        age=21;
    }

    // This function returns the name
    function getName() public view returns(string memory){
        return name;
    }
        
    // This function returns the age
    function getAge() public view returns(uint ){
        return age;
    }
    
}
