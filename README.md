# Udacity Blockchain Capstone

# Software  Used
Node: v16.14.0

Truffle v5.5.4 

Ganache CLI v6.12.2

Docker 4.3.2 (for the zokrates setup and proof generation)

# ABI
 [ Solution Verifier ](https://github.com/atayebali/RealEstateBlockChainCapstone/blob/main/eth-contracts/build/contracts/SolnSquareVerifier.json#L3)

# Rinkeby Deployment Log

`truffle-hdwallet-provider` Used in truffle config in order to deploy the contract to Rinkeby. 

[Token Contract](https://rinkeby.etherscan.io/address/0xd57dcB4b13B1395853f1C2620c4474b3c118C8ba)
[Verifier](https://rinkeby.etherscan.io/address/0x35b806322BdbBF7abA4AD612DfaAf37A58813607)

Output: 

```
Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29999972 (0x1c9c364)

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x6157adf503a33eed953a8b7ede618859db26af53cf85d891d7445517f3d74c1f
   > Blocks: 0            Seconds: 12
   > contract address:    0x35b806322BdbBF7abA4AD612DfaAf37A58813607
   > block number:        10425986
   > block timestamp:     1648779913
   > account:             0x59e71283baE474FAC070183Ec8ae9B6520Cd8d68
   > balance:             18.663911330860648385
   > gas used:            967835 (0xec49b)
   > gas price:           1.000000009 gwei
   > value sent:          0 ETH
   > total cost:          0.000967835008710515 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x7f79bbcb7b6f88f6b842ef158bd99818049ce43fbe8c1c94c35eb0ccbf915713
   > Blocks: 1            Seconds: 12
   > contract address:    0xd57dcB4b13B1395853f1C2620c4474b3c118C8ba
   > block number:        10425987
   > block timestamp:     1648779928
   > account:             0x59e71283baE474FAC070183Ec8ae9B6520Cd8d68
   > balance:             18.659944991824951334
   > gas used:            3966339 (0x3c8583)
   > gas price:           1.000000009 gwei
   > value sent:          0 ETH
   > total cost:          0.003966339035697051 ETH

```

# Minted Tokens on EtherScan

The tokens were generated with `minter.js` inside the `/tools` folder.  The tools folder contain the proofs that were used to generate the tokens below.

[ List of Tokens](https://rinkeby.etherscan.io/address/0xd57dcb4b13b1395853f1c2620c4474b3c118c8ba)

[Token 0](https://rinkeby.etherscan.io/tx/0xb577fece048af43997f55656f5b43b0fa82f09787581f0fee1c3b7fc0f848cba)

[Token 1](https://rinkeby.etherscan.io/tx/0x9ce1dfa4d4e3c6fbae9935dd84894b3035d5ca4a84c02607eb248835aba13c00)

[Token 2](https://rinkeby.etherscan.io/tx/0x7375448b8173561a96dc5bdb3311178faad8cd8e6af1ddc7d9ea60263a4a46c9)

[Token 3](https://rinkeby.etherscan.io/tx/0x65c947340e57e624c73472d39f83271df8705483c5f94eabd4752f1f011da8db)

[Token 4](https://rinkeby.etherscan.io/tx/0x89e79eaef8a1b509e83b2f53b5942f46d3001d1e5531a4a45e109ac75ee0112d)

[Token 5](https://rinkeby.etherscan.io/tx/0x7f945c1de5fd0f4f3d145a5d072c1a5f949c63882c838349bd3893ef24cfa022)

[Token 6](https://rinkeby.etherscan.io/tx/0xde944246507b98b7b04dcd11ec724ca3a9d64e64d16a69d9e03967d05202c1cb)

[Token 7](https://rinkeby.etherscan.io/tx/0xfa7dd7de10ae76dcab0e8906a5ac3dfdf74b3dcd63661a6166fe40386acd31a6)

[Token 8](https://rinkeby.etherscan.io/tx/0xfa7dd7de10ae76dcab0e8906a5ac3dfdf74b3dcd63661a6166fe40386acd31a6)

[Token 9](https://rinkeby.etherscan.io/tx/0x641ddcdfdbdb7b6d8eadf4134e1cfc47089db426cde476e84821821ad1cc1e72)


### Open Sea Market

[Market Place Seller](https://testnets.opensea.io/collection/unidentified-contract-8axp39qidv)

[Market Place Buyer](https://testnets.opensea.io/0xba73ae87e14be06ff5a41ef892c1b29157312ec1)


The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
