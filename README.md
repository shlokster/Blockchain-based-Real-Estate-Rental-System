# QuangThinhBDS

This project is a rent realestate platform application that uses [OpenZepplin](https://github.com/OpenZeppelin/openzeppelin-solidity).

The contract is compiled and deployed under the ERC-721 non-fungible token standard with hardhat framework. After deploying onto the Ethereum blockchain, users will be able to use this application by interacting with the smart contract through DAPP’s front-end interface.

# ERC-721 Token

ERC-721 non-fungible token:
ERC-721 is a free, open standard that describes how to build non-fungible or unique tokens on the Ethereum blockchain. While most tokens are fungible (every token is the same as every other token), ERC-721 tokens are all unique (with unique ID).

[Reference](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md)

# Contracts

You can find contract detail under `contracts/` directory:


# Tech Stack

**Client:** NextJs, TailwindCSS, Hardhat, MetaMask

**Server:** NodeJs, Mysql

**Blockchain:** Etherscan

# Installation

Install front-end: 

```bash
  npm install
  npx hardhat compile
  npx hardhat run --network testnet scripts/deploy.js
  npm run dev
```

Install back-end: 
```bash
  npm install
  npm start
```

# Authors

- [@shlokster](https://github.com/shlokster)

- [@ayman](https://github.com/Ayman161803)

# Support

For support, email bhosaleshlok@gmail.com.
