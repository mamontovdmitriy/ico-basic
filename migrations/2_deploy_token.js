const Token = artifacts.require("./MyToken.sol");
const Crowdsale = artifacts.require("./MyCrowdsale.sol");

module.exports = (deployer, network, accounts) => {

    const owner = accounts[0];

    console.log('+ Owner address:', owner);

    // try {
    deployer.deploy(Token).then(async (t) => {

        console.log('+ Token deployed: ', t.address);

        const c = await deployer.deploy(Crowdsale, owner, t.address);

        console.log('+ Crowdsale deployed: ', c.address);

        await t.transferOwnership(c.address, {from: owner});

        console.log("+ Token owner was changed at:", c.address);
    });

    // } catch (e) {
    //     console.log(e);
    // }
};

/**
 module.exports = function (deployer, network, accounts) {

    const owner = accounts[0];

    console.log('+ Owner address:', owner);

    deployer.deploy(Token).then((instanceToken) => {
        deployer.deploy(Crowdsale, owner, instanceToken.address)
            .then((instanceCrowdsale) => {
                console.log('Crowdsale deployed!', instanceCrowdsale.address);

                instanceToken.transferOwnership(instanceCrowdsale.address, {from: owner}).then((txn) => {
                    console.log("+ Token owner was changed at:", instanceCrowdsale.address);
                });
            })
            .catch((e) => {
                console.log('Crowdsale deploy catch:', e);
            });
    }).catch((e) => {
        console.log('Token deploy catch:', e);
    });

};
 */