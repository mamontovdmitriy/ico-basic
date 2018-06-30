const Token = artifacts.require("./MyToken.sol");
const Crowdsale = artifacts.require("./MyCrowdsale.sol");

contract('Token', (accounts) => {
    it("should be empty balances", () => {
        return Token.deployed().then(async (instance) => {
            let balance = 0;
            for (let i = 0; i < accounts.length; i++) {
                balance = await instance.balanceOf.call(accounts[i]);
                assert.equal(balance.valueOf(), 0, `Account ${accounts[i]} is not empty!`);
            }
        })
    });

    it("should be tokens owner not equal to accounts[0]", async () => {
        const token = await Token.deployed();
        const _owner = await token.owner.call();
        assert.notEqual(_owner.toString(), accounts[0], "Token owner wasn't changed!");
    });

    it("should be tokens owner equal to Crowdsale address", async () => {
        const token = await Token.deployed();
        const crowdsale = await Crowdsale.deployed();
        const _owner = await token.owner.call();

        assert.equal(_owner, crowdsale.address, `Token owner wasn't changed on ${crowdsale.address}!`);
    });

    it("should be correct token info", async () => {
        const token = await Token.deployed();

        const _name = await token.name.call();
        const _symbol = await token.symbol.call();
        const _decimals = await token.decimals.call();

        assert.equal(_name, "My token", "Token name is not correct!");
        assert.equal(_symbol, "MYT", "Token symbol is not correct!");
        assert.equal(_decimals, 18, "Token decimals is not correct!");
    });
});