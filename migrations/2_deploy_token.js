const Token = artifacts.require("./MyToken.sol");
const Crowdsale = artifacts.require("./MyCrowdsale.sol");

module.exports = function (deployer, network, accounts) {

    const owner = accounts[0];

    console.log('+ Owner address:', owner);

    deployer.deploy(Token);

    Token.deployed().then(() => {
        deployer.deploy(Crowdsale, 1000, owner, Token.address)
            .then(() => {
                console.log('Crowdsale deployed!', Crowdsale.address);
            })
            .catch((e) => {
                console.log('Crowdsale deploy catch:', e);
            });
    }).catch((e) => {
        console.log('Token deploy catch:', e);
    });

};
