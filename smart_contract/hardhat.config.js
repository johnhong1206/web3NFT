require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/Cq1NLtrRkuywM3rfQ1VTZsZ1bXYK_Cnb",
      accounts: [
        "6cecdd571d5a21538e4cb0dd67bda4a1997f6c88d9c48f969d04f58c8467f763",
      ],
    },
  },
};
