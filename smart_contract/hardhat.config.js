// https://eth-ropsten.alchemyapi.io/v2/njIxXncrdGNUIimsDKuxjtB0-INdsx_u

require("@nomiclabs/hardhat-waffle");
const dotenv = require('dotenv');
dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: `${process.env.ALCHEMY_URL}`,
      accounts: [`${process.env.ACCOUNT}`]
    }
  }
};
