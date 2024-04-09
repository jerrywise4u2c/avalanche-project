# UserDetails Solidity Contract

This Solidity smart contract, `UserDetails`, allows you to manage and check the age of users. It includes functions to update the user's age, emit events, and handle different conditions using `require`, `revert`, and `assert`. 

## Features
- `userAge`: A public variable representing the current age of the user, initialized to 18.
- `UserAgeEvent`: An event emitted when the user's age is updated.
- `checkStudentAgeRequried`: A function to check and update the user's age using `require`.
- `checkStudentAgeRevert`: A function to check and update the user's age using `revert`.
- `checkStudentAgeAssert`: A function to check and update the user's age using `assert`.
- `NOT_ELIGIBLE_TO_VOTE`: Custom error to handle the "not eligible to vote" condition.

## Usage

### Interaction Script

Below is an example interaction script in JavaScript using ethers.js to interact with the `UserDetails` contract.

```javascript
const { ethers } = require("hardhat");

async function main() {
  // Deploying the contract
  const UserDetails = await ethers.getContractFactory("UserDetails");
  const userDetails = await UserDetails.deploy();
  await userDetails.deployed();
  console.log("UserDetails contract deployed to:", userDetails.address);

  // Checking and updating user's age
  console.log("Current user age:", (await userDetails.userAge()).toString());

  // Using checkStudentAgeRequried function
  const newAge = 20;
  await userDetails.checkStudentAgeRequried(newAge);
  console.log("User age updated to:", (await userDetails.userAge()).toString());

  // Using checkStudentAgeRevert function
  await userDetails.checkStudentAgeRevert(18); // This should revert

  // Viewing emitted events
  const userAgeEventFilter = userDetails.filters.UserAgeEvent();
  const events = await userDetails.queryFilter(userAgeEventFilter);
  console.log("UserAgeEvent events:", events);
}

main();
```

Ensure you have `hardhat` and `ethers` installed, and you can customize the script according to your needs.

## License
This contract is released under the UNLICENSED license.