// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Studentrecords{
    string private studentname;

    function setStudent(string memory _name)public{
        studentname = _name;
    }

    function getStudent() public view returns(string memory){
        return studentname;
    }
}
