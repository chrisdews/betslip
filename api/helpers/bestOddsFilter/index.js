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
    return betData.bets.map((bet) => {
      const bestOdds = bet.odds.reduce((bestOdds, currentOdds) => {
        return Math.max(bestOdds, currentOdds.oddsDecimal);
      }, 0);
      return { ...bet, bestOdds: bestOdds };
    });
  },
};
