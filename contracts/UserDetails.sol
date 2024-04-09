// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract UserDetails {
    uint public userAge = 18;

    event UserAgeEvent(uint age);

    error NOT_ELIGIBLE_TO_VOTE();

    function checkStudentAgeRequried(uint _age) external {
        require(_age > userAge, " you are old enough to travel");
        userAge = _age;
        emit UserAgeEvent(_age);
    }

    function checkStudentAgeRevert(uint _age) external {
        if (_age < userAge) {
            revert NOT_ELIGIBLE_TO_VOTE();
        }
        emit UserAgeEvent(_age);
    }

    function checkStudentAgeAssert(uint _age) external {
        assert(_age >= userAge);
        emit UserAgeEvent(_age);
    }
}
