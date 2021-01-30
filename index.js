const tokenInfo = {
  santa: {
    supply: 101,
    start: 13000000,
    limited: true,
    owner: "0xb3330e9057b4d9bd27875b46f0897b2a8f63da1a",
    priceInETH: 0.035,
  },
  snowman: {
    supply: 101,
    start: 12000000,
    limited: true,
    owner: "0xb3330e9057b4d9bd27875b46f0897b2a8f63da1a",
    priceInETH: 0.035,
  },
  helper: {
    supply: 0,
    start: 11000000,
  },
  sleeve: {
    supply: 1,
    start: 1,
    owner: "0xb3330e9057b4d9bd27875b46f0897b2a8f63da1a",
    priceInETH: 0.0001,
  },
};

module.exports = {
  tokenInfo: tokenInfo,
  getName: (tokenId) => {
    for (const tokenName in tokenInfo) {
      const info = tokenInfo[tokenName];
      if (
        tokenId >= info.start &&
        tokenId < info.start + info.supply
      ) {
        return tokenName;
      }
    }
    return "";
  },
  getSupply: (tokenName) => {
    const info = tokenInfo[tokenName];
    if(!info || !info.supply) return 0;
    return info.supply;
  },
};