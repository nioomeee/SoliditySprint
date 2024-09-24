// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract map{
    mapping(address => uint)public grades;
    
    function setGrade(address _student, uint _grade) public{
        grades[_student] = _grade;
    }

    function getGrade(address _student)public view returns(uint) {
        return grades[_student];
    }
}