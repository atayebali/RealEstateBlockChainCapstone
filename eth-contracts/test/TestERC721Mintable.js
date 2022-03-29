var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new({ from: account_one });
            await this.contract.mint(account_one, 1)
        })

        it('should return total supply', async function () {
            let supply = await this.contract.totalSupply.call()
            assert(supply, 1, "Supply is incorrect ")
        })

        it('should get token balance', async function () {
            let balance = await this.contract.balanceOf.call(account_one)
            assert(balance, 1, "Balance is incorrect ")
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {

        })

        it('should transfer token from one owner to another', async function () {

        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new({ from: account_one });
        })

        it('should fail when minting when address is not contract owner', async function () {

        })

        it('should return contract owner', async function () {

        })

    });
})