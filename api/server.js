const express = require('express');
const app = express();
const cors = require('cors');
const betData = require('./data/data.json')

app.use(cors());

app.get('/decimalOddsMoreThanTwo', (req, res) => {
    // code here
    console.log(Math.max.apply(Math, betData.bets[0].map(x => { return x.y; })))
    console.log(betData.bets.filter(bets => bets.odds.reduce((x, y) => Math.max(x, y))))
    const filteredData = betData.bets.filter(bets => bets.odds.reduce((x, y) => Math.max(x, y)).oddsDecimal > 2)
    res.send({filteredData})
});

app.get('/decimalOddsLessThanTwo', (req, res) => {
    // code here
    
    const filteredData = betData.bets.filter(bets => bets.odds[0].oddsDecimal < 2)
    res.send({filteredData})
});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});