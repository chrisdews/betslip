const express = require('express');
const app = express();
const cors = require('cors');
const bestOddsFilter = require('./helpers/bestOddsFilter')

app.use(cors());

app.get('/decimalOddsMoreThanTwo', (req, res) => {
    // code here

    const filteredData = bestOddsFilter.oddsFilter(2, 1000) 
    res.send({filteredData})
});

app.get('/decimalOddsLessThanTwo', (req, res) => {
    // code here
    
    const filteredData = bestOddsFilter.oddsFilter(0, 2) 
    res.send({filteredData})
});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});