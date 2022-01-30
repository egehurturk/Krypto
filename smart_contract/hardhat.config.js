// https://eth-ropsten.alchemyapi.io/v2/njIxXncrdGNUIimsDKuxjtB0-INdsx_u

require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    bsc: {
      url: "https://eth-ropsten.alchemyapi.io/v2/njIxXncrdGNUIimsDKuxjtB0-INdsx_u",
      accounts: [ '643a00b310b09799955ae3bfd1af64bd7d2aedfc3cb9902384a092edbec6bb2d' ]
    }
  }
};
