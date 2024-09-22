//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Student{
    string public name;
    uint public id;

    // to set student's name and id
    function setStudent(string memory _name, uint _id)public{
        name = _name;
        id = _id;
    }
}