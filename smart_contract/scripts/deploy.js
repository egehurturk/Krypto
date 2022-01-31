const hre = require("hardhat");
var argv = require('minimist')(process.argv.slice(2));

const main = async () => {

  const contractObj = await hre.ethers.getContractFactory("Transactions");
  const contractResp = await contractObj.deploy();

  await contractResp.deployed();

  console.log(`Trajsactions deployed to: ${contractResp.address}`);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();