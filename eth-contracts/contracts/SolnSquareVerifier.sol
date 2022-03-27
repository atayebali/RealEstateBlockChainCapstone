pragma solidity >=0.4.21 <0.6.0;

//  define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "./verifier.sol";
import "./ERC721Mintable.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

//  define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CustomERC721Token {
    //  define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address addr;
        bool exists;
    }

    //  define an array of the above struct
    Solution[] private solutionList;
    //  define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) solutions;

    // Create an event to emit when a solution is added
    event SolutionAdded(uint256 index, address addr);

    //  Create a function to add the solutions to the array and emit the event

    modifier unique(bytes32 key) {
        require(!solutions[key].exists, "The key is unique");
        _;
    }

    function solutionAdded(bytes32 key, address verifyAddress)
        public
        unique(key)
    {
        Solution memory solution = Solution(
            solutionList.length,
            verifyAddress,
            true
        );
        solutionList.push(solution);
        solutions[key] = solution;
        emit SolutionAdded(solution.index, verifyAddress);
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
}
