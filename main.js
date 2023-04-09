const {Blockchain, Transaction} = require('./blockchain.js');
const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;

const myKey = ec.keyFromPrivate('f6b8906998ec1b802c117f31863516e56e69edf3fdbd1db4a3fb989108f7e677');
const myWalletAddress = myKey.getPublic('hex');


let DumbCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
DumbCoin.addTransaction(tx1);

console.log('\nStarting the miner...');
DumbCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of xavier: ' + DumbCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?', DumbCoin.isChainValid());

