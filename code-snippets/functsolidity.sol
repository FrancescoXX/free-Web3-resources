pragma solidity >=0.5.0 < 0.9.0;
// program to return the value of function 
contract nameAndAge {
    string name;
    uint age;
    
    constructor() public{
    
    
    name='Gitansh';
    age=21;
    

    function getName() view public returns(string memory){
    // function will return age
    return name;

    
    }
    function getName() view public returns(uint ){
    //function will return age
    return age;
    
    
    }
    

}
