pragma solidity ^0.4.24;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract MyToken is MintableToken {
    string public name = "My token";
    string public symbol = "MYT";
    uint8 public decimals = 18;
}
