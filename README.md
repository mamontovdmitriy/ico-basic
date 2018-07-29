# ico-basic
Basic ICO project (token &amp; crowdsale)

## Prepare
1. Install Truffle: `npm install -g truffle`
2. Install Ganache: `npm install -g ganache-cli`
3. Install Solc: `npm install -g solc`

### Developing

    git clone https://github.com/mamontovdmitriy/ico-basic.git ico-basic
    cd ico-basic
    npm install

### Setting
    
    cp ./mnemonic.js.example ./mnemonic.js
    vi ./mnemonic.js
    
### Compiling &amp; Testing

    truffle compile
    truffle test

### Ganache testing
    
    truffle console --network ganache
    > test

### Deploying

    truffle migrate --network ropsten

