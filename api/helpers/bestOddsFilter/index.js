const betData = require("../../data/data.json");

module.exports = {
  oddsFilter(min, max) {
    const betDataBestOddsAdded = this.addBestOddsToData();
    const filteredData = betDataBestOddsAdded.filter(
      (bets) => bets.bestOdds < max && bets.bestOdds > min
    );
    return filteredData;
  },
  addBestOddsToData() {
    const bestOdds = this.getBestOdds();
    let betDataBestOddsAdded = [];

    betData.bets.forEach((el) => {
      el["bestOdds"] = bestOdds[el.betId];
      betDataBestOddsAdded.push(el);
    });
    return betDataBestOddsAdded;
  },
  getBestOdds() {
    let obj = {};
    betData.bets.forEach((val) =>
      val.odds.forEach((el) => {
        if (el.oddsDecimal > obj[val.betId] || !obj[val.betId]) {
          obj[val.betId] = el.oddsDecimal;
        }
      })
    );
    return obj;
  },
};
