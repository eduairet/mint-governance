'use strict';

const { ethers } = require('hardhat');
require('dotenv').config();
const { getContractAt, getSigners, utils } = ethers,
    { keccak256, toUtf8Bytes, parseEther } = utils,
    { GOVERNOR_ADDRESS, TOKEN_ADDRESS, PROPOSAL, PROPOSAL_ID } = process.env;

async function main() {
    const [owner] = await getSigners(),
        token = await getContractAt('MyToken', TOKEN_ADDRESS),
        governor = await getContractAt('MyGovernor', GOVERNOR_ADDRESS),
        proposalState = await governor.state(PROPOSAL_ID);
    console.log(`Proposal: ${PROPOSAL}\nWith state ${proposalState}`);
    if (proposalState === 4) {
        const tx = await governor.execute(
                [token.address],
                [0],
                [
                    token.interface.encodeFunctionData('mint', [
                        owner.address,
                        parseEther('10'),
                    ]),
                ],
                keccak256(toUtf8Bytes(PROPOSAL))
            ),
            receipt = await tx.wait();
        console.log(
            `Proposal executed with transaction hash: ${receipt.transactionHash}`
        );
    }
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
