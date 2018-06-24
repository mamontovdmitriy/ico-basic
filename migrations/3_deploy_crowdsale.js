const Token = artifacts.require("./MyToken.sol");
const Crowdsale = artifacts.require("./MyCrowdsale.sol");

module.exports = function(deployer, network, accounts) {

    const owner = accounts[0];

    Token.deployed().then((instanceToken) => {
        console.log("+ Token address:", instanceToken.address);

        Crowdsale.deployed().then((instanceCrowdsale) => {
            console.log("+ Crowdsale address:", instanceCrowdsale.address);

            instanceToken.transferOwnership(instanceCrowdsale.address, {from: owner}).then((txn) => {
                console.log("+ Token owner was changed at:", instanceCrowdsale.address);
            });
        });
    });
};
