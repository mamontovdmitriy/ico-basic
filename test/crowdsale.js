const Token = artifacts.require("./MyToken.sol");
const Crowdsale = artifacts.require("./MyCrowdsale.sol");

contract('Crowdsale', (accounts) => {
    it("buy 1 000 tokens for 1 ETH", async () => {

        const token = await Token.deployed();
        const crowdsale = await Crowdsale.deployed();

        const buyer_1000 = accounts[2];
        const buyer_2000 = accounts[3];
        const buyer_3000 = accounts[4];

        await crowdsale.sendTransaction({from: buyer_1000, value: web3.toWei(1, 'ether')});
        const balance = await token.balanceOf.call(buyer_1000);
        assert.equal(web3.fromWei(balance.valueOf()), 1000, `Balance of ${buyer_1000} is not 1000 tokens!`);

        await crowdsale.sendTransaction({from: buyer_2000, value: web3.toWei(2, 'ether')});
        assert.equal(
            web3.fromWei((await token.balanceOf.call(buyer_2000)).valueOf()),
            2000,
            `Balance of ${buyer_2000} is not 2000 tokens!`);

        await crowdsale.sendTransaction({from: buyer_3000, value: web3.toWei(3, 'ether')});
        assert.equal(
            web3.fromWei((await token.balanceOf.call(buyer_3000)).valueOf()),
            3000,
            `Balance of ${buyer_3000} is not 3000 tokens!`);
    });

});