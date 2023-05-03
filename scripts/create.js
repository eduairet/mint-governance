'use strict';

const { ethers } = require('hardhat');
require('dotenv').config();
const { getContractAt, getSigners, utils } = ethers,
    { parseEther } = utils,
    { GOVERNOR_ADDRESS, TOKEN_ADDRESS, PROPOSAL } = process.env;

async function main() {
    const [owner] = await getSigners(),
        token = await getContractAt('MyToken', TOKEN_ADDRESS),
        governor = await getContractAt('MyGovernor', GOVERNOR_ADDRESS),
        tx = await governor.propose(
            [token.address], // The token address is the target
            [0], // No ether value is involved in this transaction
            [
                token.interface.encodeFunctionData('mint', [
                    owner.address,
                    parseEther('10'),
                ]),
            ], // Sends 10 MTK to the owner address
            PROPOSAL // Description about the proposal
        ),
        receipt = await tx.wait(),
        event = receipt.events.find(x => x.event === 'ProposalCreated'),
        { proposalId } = event.args;

    console.log(`Proposal Id: ${proposalId}`);
    console.log(`Propose transaction hash: ${receipt.transactionHash}`);
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
