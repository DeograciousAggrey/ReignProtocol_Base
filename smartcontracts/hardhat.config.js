require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("hardhat-gas-reporter");
require("dotenv").config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: {
		version: "0.8.4",
		settings: {
			optimizer: {
				enabled: true,
				runs: 100,
			},
		},
	},
	paths: {
		artifacts: "../frontend/src/artifacts",
	},
	networks: {
		// for mainnet
		'base-mainnet': {
		  url: 'https://mainnet.base.org',
		  accounts: [process.env.WALLET_KEY],
		  gasPrice: 1000000000,
		},
		// for testnet
		'base-sepolia': {
		  url: 'https://sepolia.base.org',
		  accounts: [process.env.WALLET_KEY],
		  gasPrice: 1000000000,
		},
		// for local dev environment
		'base-local': {
		  url: 'http://localhost:8545',
		  accounts: [process.env.WALLET_KEY],
		  gasPrice: 1000000000,
		},
	  },
};
