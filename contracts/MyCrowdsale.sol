pragma solidity ^0.4.24;

import 'zeppelin-solidity/contracts/crowdsale/Crowdsale.sol';
import 'zeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol';

contract MyCrowdsale is MintedCrowdsale {
    uint256 _rate = 1000; // count of token per 1 ETH

    constructor(address _wallet, ERC20 _token) public Crowdsale(_rate, _wallet, _token) {}
}
