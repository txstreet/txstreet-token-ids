module.exports = {
  getName: (tokenId) => {
    let tokenName;
    if (tokenId == 1) {
      tokenName = "sleeve";
    } else if (tokenId >= 11000000 && tokenId < 12000000) {
      tokenName = "helper";
    } else if (tokenId >= 12000000 && tokenId < 13000000) {
      tokenName = "snowman";
    } else if (tokenId >= 13000000 && tokenId < 14000000) {
      tokenName = "santa";
    }
    return tokenName;
  },
  getSupply: (tokenName) => {
    let supply = 0;
    if (tokenName == "santa") {
      supply = 102;
    } else if (tokenName == "snowman") {
      supply = 102;
    }
    return supply;
  },
};
