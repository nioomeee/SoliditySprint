// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract Inheritance{
    string public stuname;

    function setName(string memory _name)public{
        stuname = _name;
    }
    
}

contract Grade is Inheritance{
    uint public girade;

    function setGrade(uint _grade)public{
        girade = _grade;
    }
}