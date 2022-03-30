// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier


var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const proof = require('./../../zokrates/code/square/proof.json');
contract('TestSolnSquareVerifier', accounts => {
  const owner = accounts[0];
  const to = accounts[1];

  beforeEach(async () => {
    this.contract = await SolnSquareVerifier.new({ from: owner });
  });

  it("New Solution is added and Token is minted ", async () => {
    let zkproof = proof.proof
    await this.contract.mint(
      to,
      10,
      zkproof.a,
      zkproof.b,
      zkproof.c,
      proof.inputs
    )

    let bal = await this.contract.balanceOf.call(to)
    assert(bal.toNumber(), 1, "Balance did not update correctly")
  })
})