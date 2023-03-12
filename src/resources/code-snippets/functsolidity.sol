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
    
    // This function allows you to change the name
    function changeName(string memory _newName) public {
        name = _newName;
    }

    // This function allows you to change the age
    function changeAge(uint _newAge) public {
        age = _newAge;
    }
    
}
