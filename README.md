# Udacity Blockchain Capstone

# Software  Used
Node: v16.14.0

Truffle v5.5.4 

Ganache CLI v6.12.2

Docker 4.3.2 (for the zokrates setup and proof generation)

# Rinkeby Deployment Log

`truffle-hdwallet-provider` Used in truffle config in order to deploy the contract to Rinkeby. 

[Contract](https://rinkeby.etherscan.io/address/0x0CbE38cB45b34E01EBd8f9111001c918ee4742AB)

Output: 

```
Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29999972 (0x1c9c364)

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0xdc57fcfcc7b1d6d9346dc29a0c75aaf7a575f9d60ebf3693ed564a7b43193f97
   > Blocks: 1            Seconds: 12
   > contract address:    0x0F2aE729F695Ba12a940C9772477c726542E3BE6
   > block number:        10425369
   > block timestamp:     1648770643
   > account:             0x59e71283baE474FAC070183Ec8ae9B6520Cd8d68
   > balance:             18.671536092925034391
   > gas used:            967835 (0xec49b)
   > gas price:           1.000000008 gwei
   > value sent:          0 ETH
   > total cost:          0.00096783500774268 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x5714ef086b93296e9688ad58aadf29b320c9ec149895c33c7e345037596b3548
   > Blocks: 1            Seconds: 12
   > contract address:    0x0CbE38cB45b34E01EBd8f9111001c918ee4742AB
   > block number:        10425370
   > block timestamp:     1648770658
   > account:             0x59e71283baE474FAC070183Ec8ae9B6520Cd8d68
   > balance:             18.667569741893303583
   > gas used:            3966351 (0x3c858f)
   > gas price:           1.000000008 gwei
   > value sent:          0 ETH
   > total cost:          0.003966351031730808 ETH

```

# Minted Tokens on EtherScan

The tokens were generated with `minter.js` inside the tools folder.  The tools folder contain the proofs that were used to generate the tokens below.

[ List of Tokens](https://rinkeby.etherscan.io/token/0xf8e0a638be1a111e28d04ccee597fdc7f57fa43e)

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

[Token 10](https://rinkeby.etherscan.io/tx/0xd3c5c4a9b3782b9e4b71953b7fdb4de483de0d0b78ffce273ba1c54748e18c4c)


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
