// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract Event{
    mapping(address => uint) public grades;

    event GradeSet(address indexed student, uint grade);

    function setGrade(address _student, uint _grade) public{
        grades[_student] = _grade;

        emit GradeSet(_student, _grade);
    }
}