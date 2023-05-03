# ERC20 Governor

## Deployments

-   Governor
    -   [0x08A104a9B77F8E821Eb1b5e93d20bD0eea337C63](https://sepolia.etherscan.io/address/0x08A104a9B77F8E821Eb1b5e93d20bD0eea337C63)
-   Token
    -   [0x52fAa105B13b8773900Eb8d77692E5c82BB71b54](https://sepolia.etherscan.io/address/0x52fAa105B13b8773900Eb8d77692E5c82BB71b54)

## Interactions

-   Delegate the votes to yourself `npx hardhat run scripts/delegate.js --network sepolia`
    -   [`delegate.js`](./scripts/delegate.js)
    -   Delegate transaction hash: [0xc9f670982f19da2327383c812aac2ad38df0794df35ee77949adecf0ba735b68](https://sepolia.etherscan.io/tx/0xc9f670982f19da2327383c812aac2ad38df0794df35ee77949adecf0ba735b68)
-   Create a proposal `npx hardhat run scripts/create.js --network sepolia`
    -   [`create.js`](./scripts/create.js)
    -   Give a grant to the dev proposal transaction hash: [0xfdacf7fa76cbe3673e92e7527611e6fe3c2365bf9f929338801ca26f4c7eb30b](https://sepolia.etherscan.io/tx/0xfdacf7fa76cbe3673e92e7527611e6fe3c2365bf9f929338801ca26f4c7eb30b)
-   Vote on the proposal `npx hardhat run scripts/vote.js --network sepolia`
    -   [`vote.js`](./scripts/vote.js)
    -   Vote registered with transaction hash: [0x985721eb3067591f2d1342c42686e1735046d0457e02e3777d256c1e95701f8c](https://sepolia.etherscan.io/tx/0x985721eb3067591f2d1342c42686e1735046d0457e02e3777d256c1e95701f8c)
-   Execute the proposal ` npx hardhat run scripts/execute.js --network sepolia`
    -   [`execute.js`](./scripts/execute.js)
    -   Needs 50 blocks to pass after the proposal is created
    -   Proposal executed with transaction hash: [0xcf8e9bba85bb3356d8b91a03a975bb9aba0bb12177968bd7459e405c094874ad](https://sepolia.etherscan.io/tx/0xcf8e9bba85bb3356d8b91a03a975bb9aba0bb12177968bd7459e405c094874ad)
