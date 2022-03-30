pragma solidity >=0.4.21 <0.6.0;

//  define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "./verifier.sol";
import "./ERC721Mintable.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

//  define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ERC721MintableComplete, Verifier {
    //  define a solutions struct that can hold an index & an address
    struct Solution {
        address addr;
        bool exists;
    }

    //  define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) solutions;

    // Create an event to emit when a solution is added
    event SolutionAdded(bytes32 key, address addr, bool exists);

    modifier validTx(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[2] memory input
    ) {
        require(verifyTx(a, b, c, input), "TX verification Failed");
        _;
    }

    function solutionAdd(bytes32 key, address verifyAddress) internal {
        require(!solutions[key].exists, "The key is unique");
        Solution memory solution = Solution(verifyAddress, true);
        solutions[key] = solution;
        emit SolutionAdded(key, verifyAddress, solutions[key].exists);
    }

    //  Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mint(
        address to,
        uint256 tokenId,
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[2] memory inputs
    ) public validTx(a, b, c, inputs) {
        bytes32 key = keccak256(abi.encodePacked(a, b, c, inputs));

        solutionAdd(key, msg.sender);
        super.mint(to, tokenId);
    }
}
