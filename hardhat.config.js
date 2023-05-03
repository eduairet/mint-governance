require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
const { SEPOLIA_URL, PRIV_KEY, ETHERSCAN_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: '0.8.17',
    networks: {
        sepolia: {
            url: SEPOLIA_URL,
            accounts: [PRIV_KEY],
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_KEY,
    },
};
