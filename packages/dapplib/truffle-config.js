require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind million grace pet swift struggle'; 
let testAccounts = [
"0xc9ba03bcbf57d6677a3f177445af9c8332b4251b966aeed23745bbb1e4fccc7e",
"0xd2cd4730470b214bd627e9259b9615ff25e9224d406a373cd3fbc03d2e87c057",
"0x0f5b0388dfae60a12cfbc24b959558d111fd5ee6acf29c2043fb04795ea2228f",
"0xd0f4be89cd805dab8e4da1e33e355d3728f7df28ab2e8ec358ce6a0f93964c70",
"0x3c0a84131cfd8f43777355bba521f6a248754e798213c7990199b8dc8b3dda64",
"0x6bc0e10882901b4cb5db2081e0e12084c7a3d05134b6e61868399e30d836b55c",
"0x76d253c3149c33d5479c98a21822243c22f5772f3fed80b6c65161138c1f5227",
"0x8c2619ac3f2ba3f9a487a3891dd8a3c57417592389238a43dc6146b7fdc3ee3f",
"0xcdd5678a1e61c66f762d2afb3e9b1566555abd4e12511cbbd33a89af6bebc912",
"0x50a3fa7f3871cb072510dc0f6191a2c53a5573dac36b740b8c2fa4ef22cb2a79"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


