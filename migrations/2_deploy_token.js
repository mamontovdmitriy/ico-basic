const Token = artifacts.require("./MyToken.sol");
const Crowdsale = artifacts.require("./MyCrowdsale.sol");

module.exports = (deployer, network, accounts) => {

    const owner = accounts[0];

    deployer.deploy(Token).then(async (t) => {
        const c = await deployer.deploy(Crowdsale, owner, t.address);
        await t.transferOwnership(c.address, {from: owner});
    });

};
