const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");
const compiledFactory = require("./build/CampaignFactory.json");

//mnemonic + rinkeby provider from infura
const provider = new HDWalletProvider(
  "candy deputy grab bubble gesture wet legal fame claw wing retire crucial",
  "https://rinkeby.infura.io/v3/3010037103b9404c8f4b863207d6fc86"
);

const web3 = new Web3(provider);

const deploy = async () => {
  accounts = await web3.eth.getAccounts();

  console.log("attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", gasPrice: "5000000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};
//0x28CcC8387CF33Df604B424db41E088B4B4Ac6d0E
deploy();
