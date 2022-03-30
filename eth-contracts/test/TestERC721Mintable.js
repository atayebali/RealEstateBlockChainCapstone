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
            let tokenuri = await this.contract.tokenURI(1)
            assert(tokenuri, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "URI is incorrect")
        })

        it('should transfer token from one owner to another', async function () {
            await this.contract.safeTransferFrom(account_one, account_two, 1)
            var balance = await this.contract.balanceOf.call(account_one)
            assert(balance, 0, "Balance is incorrect ")

            var balance = await this.contract.balanceOf.call(account_two)
            assert(balance, 1, "Balance is incorrect ")
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new({ from: account_one });
        })

        it('should fail when minting when address is not contract owner', async function () {
            try {
                await this.contract.mint(account_two, 1, { from: account_two })
            } catch (e) {
                var message = "Returned error: VM Exception while processing transaction: revert Must be owner to execute -- Reason given: Must be owner to execute."
                assert(e, message, "Expected an erorr but nothing happened.")
            }
        })

        it('should return contract owner', async function () {
            let owner = await this.contract.getOwner.call()
            assert(owner, account_one, "Owner is not returned correctly")

        })

    });
})