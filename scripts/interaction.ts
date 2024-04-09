const { ethers } = require("hardhat");

async function main() {
  // Deploying the contract
  const UserDetails = await ethers.getContractFactory("UserDetails");
  const userDetails = await UserDetails.deploy();
  console.log("UserDetails contract deployed to:", userDetails.address);

  // Checking and updating user's age
  console.log("Current user age:", (await userDetails.userAge()).toString());

  // Using checkStudentAgeRequried function
  const newAge = 20;
  await userDetails.checkStudentAgeRequried(newAge);
  console.log("User age updated to:", (await userDetails.userAge()).toString());

  // Using checkStudentAgeRevert function
  await userDetails.checkStudentAgeRevert(18); // This should revert
  //   try {

  //   } catch (error) {
  //     console.error("Error");
  //   }

  // Viewing emitted events
  const userAgeEventFilter = userDetails.filters.UserAgeEvent();
  const events = await userDetails.queryFilter(userAgeEventFilter);
  console.log("UserAgeEvent events:", events);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
