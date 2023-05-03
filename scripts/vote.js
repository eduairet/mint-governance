'use strict';

const { ethers } = require('hardhat');
require('dotenv').config();
const { getContractAt } = ethers,
    { GOVERNOR_ADDRESS, PROPOSAL_ID } = process.env;

async function main() {
    const governor = await getContractAt('MyGovernor', GOVERNOR_ADDRESS),
        proposalState = await governor.state(PROPOSAL_ID);
    console.log(proposalState);
    // If proposalState is active it continues
    if (proposalState == 1) {
        const tx = await governor.castVote(PROPOSAL_ID, 1), // In favor
            receipt = await tx.wait();
        console.log(
            `Vote registered with transaction hash: ${receipt.transactionHash}`
        );
    }
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
