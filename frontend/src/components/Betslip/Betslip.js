import React, { useEffect, useState } from "react";
import Header from "../Header";
import BetsContainer from "../BetsContainer";
import Footer from "../Footer";
import ReceiptModal from "../ReceiptModal";

function Betslip() {
  const [bets, setBets] = useState(null);
  const [stakes, setStakes] = useState({});
  const [betPlaced, setBetPlaced] = useState(false);
  const [betButtonDisabled, setBetButtonDisabled] = useState(true)
  const [oddsFilter, setOddsFilter] = useState('decimalOddsLessThanTwo');

  useEffect(() => {
    getBetInfo();
  }, [oddsFilter]);

  const getBetInfo = async () => {
    await fetch(`http://localhost:4000/${oddsFilter}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
          console.log(res.filteredData)
        setBets(res.filteredData);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const betBuilder = (betName, stake) => {
    
    setStakes((stakes) => ({
      ...stakes,
      [betName]: stake,
    }));
    setBetButtonDisabled(false)
  };

  return betPlaced ? (
    <ReceiptModal stakes={stakes} />
  ) : (
    <>
      <Header setOddsFilter={setOddsFilter}/>
      <BetsContainer bets={bets} betBuilder={betBuilder} />
      <Footer setBetPlaced={setBetPlaced} betButtonDisabled={betButtonDisabled} />
    </>
  );
}

export default Betslip;
