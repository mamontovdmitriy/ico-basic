const Token = artifacts.require("./MyToken.sol");
const Crowdsale = artifacts.require("./MyCrowdsale.sol");

contract('Token', (accounts) => {
    it("should empty balances", () => {
        return Token.deployed().then(async (instance) => {
            let balance = 0;
            for (let i = 0; i < accounts.length; i++) {
                balance = await instance.balanceOf.call(accounts[i]);
                assert.equal(balance.valueOf(), 0, `Account ${accounts[i]} is not empty!`);
            }
        })
    });

    it("should be owner changed", () => {
        return Token.deployed().then(async (instance) => {
            const _owner = await instance.owner.call();
            assert.notEqual(_owner.toString(), accounts[0], "Token owner wasn't changed!");
        })
    });

    it("should be owner changed to Crowdsale address", async () => {
        const token = await Token.deployed();
        const crowdsale = await Crowdsale.deployed();
        const _owner = await token.owner.call();

        assert.equal(_owner, crowdsale.address, `Token owner wasn't changed on ${crowdsale.address}!`);
    });
});