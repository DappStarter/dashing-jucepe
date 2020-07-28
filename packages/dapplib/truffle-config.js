require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note prefer property grace lobster equal gaze'; 
let testAccounts = [
"0x95e20d14fafc9c391064452a9eb882dfe9cbf910bb56b5448a71cd3cde702f38",
"0xc8f58b77d27cdd4a222e9e02796e776fd4820b85582cfdffec0e58493e973471",
"0x5f73f3eb3571e786cb3dbc065d2ae323593e6feb5422d92817b06d8567324a50",
"0xe556c280bc44c24ec983a12361b4bf8461a69410124d39df851b3059beacd915",
"0x8837e6ac52eb1dd0d9cb19e1463c71ab484ed7d1fc1d334717e3c148c48017e8",
"0x816cacaf7b39fb4361d1e9133bdefd7a261363b3fe4f204c177ffafe200557e3",
"0x599776f0fb72dbb6f5342ef1e381af178cf8be5a2554daf21edb70aff7ad8b8b",
"0x3c51577043d4570fed7c2afd88b09a510b6112cc6683b2c6a7ab8cf9d4767a70",
"0x0350878449582a7e8287653e26f479241f22b66bae88e5be7056d68c57782236",
"0xac5642efcb5c719b6370bbd2778c7123a236238d06b79f406bd064ee81c5ae66"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
