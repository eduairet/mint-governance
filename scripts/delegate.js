'use strict';

const { ethers } = require('hardhat');
const { getContractAt, getSigners } = ethers,
    { TOKEN_ADDRESS } = process.env;

async function main() {
    const token = await getContractAt('MyToken', TOKEN_ADDRESS),
        [owner] = await getSigners(),
        tx = await token.delegate(owner.address),
        receipt = await tx.wait();
    console.log(`Delegate transaction hash: ${receipt.transactionHash}`);
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
