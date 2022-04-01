
const HDWalletProvider = require("truffle-hdwallet-provider")
const web3 = require('web3')
const fs = require('fs');
const data = require("./.data.json") //file not committed.
const zkProofs = [
  require("./proof_1.json"),
  require("./proof_2.json"),
  require("./proof_3.json"),
  require("./proof_4.json"),
  require("./proof_5.json"),
  require("./proof_6.json"),
  require("./proof_7.json"),
  require("./proof_8.json"),
  require("./proof_9.json"),
  require("./proof_10.json"),
];

const MNEMONIC = fs.readFileSync("../eth-contracts/.secret").toString().trim();
const OWNER_ADDRESS = data["owner"]
const CONTRACT_ADDRESS = data["contract"]
const INFURA_URL = data['infuraURL']

if (!MNEMONIC || !INFURA_URL || !OWNER_ADDRESS) {
  console.error("Please set a mnemonic, infura key, owner, and contract address.")
  return
}

const contract = require('../eth-contracts/build/contracts/SolnSquareVerifier.json');
const ABI = contract.abi;

async function run() {
  //setup connection 
  const provider = new HDWalletProvider(MNEMONIC, `${INFURA_URL}`)
  const web3Instance = new web3(
    provider
  )

  if (CONTRACT_ADDRESS) {
    const contract = new web3Instance.eth.Contract(ABI, CONTRACT_ADDRESS, { gasLimit: "1000000" })
    for (let i = 0; i < 10; i++) {
      try {
        let proofs = Object.values(zkProofs[i].proof);
        let inputs = zkProofs[i].inputs;
        console.log("Owner:  " + OWNER_ADDRESS + "\n");
        console.log("Token: " + i + "\n");
        console.log("proofs " + proofs + "\n");
        console.log("inputs " + inputs + "\n");
        tx = await contract.methods.mint(OWNER_ADDRESS, i).send({ from: OWNER_ADDRESS });
        console.log("TX Hash:" + tx.transactionHash);
        console.log("-------------------------------------------------------------");
      } catch (e) {
        console.log(e);
      }
    }
  }

}

run()
