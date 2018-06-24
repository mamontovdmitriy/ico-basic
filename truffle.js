const HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = require('./mnemonic');

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    version: "0.0.1",
    description: "Simple crowdsale contract",
    authors: ["Anonymous <anonymous@consensys.net>"],
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    },
    networks: {
        ganache: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*", // match any network
            gas: 5000000
            // , gas: 6700000
            // , gasPrice: 65000000000
        },
        development: {
            host: "127.0.0.1",
            port: 9545,
            network_id: "*",
            gas: 6700000
            // , gasPrice: 65000000000
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/oS2Sr4bCTjivV6puog3L");
            },
            network_id: 3,
            gas: 6700000,
            gasPrice: 21000000000
            // gas: 8500000
            // gasPrice: 65000000000
        },
        // test: {
        //     provider: function() {
        //         return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/");
        //     },
        //     network_id: '*',
        // },
        // live: {
        //     host: "178.25.19.88", // Random IP for example purposes (do not use)
        //     port: 80,
        //     network_id: 1,        // Ethereum public network
        //     // optional config values:
        //     // gas
        //     // gasPrice
        //     // from - default address to use for any transaction Truffle makes during migrations
        //     // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
        //     //          - function that returns a web3 provider instance (see below.)
        //     //          - if specified, host and port are ignored.
        // }
    },
    license: "MIT"
};