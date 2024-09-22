// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract Gradecheck{
    uint public passinggrade = 50;

    function haspassed(uint _grade) public view returns (string memory){
        if(_grade >= passinggrade){
            return "Passed";
        }
        else{
            return "Fail";
        }
    }   
}
