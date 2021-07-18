import React, { useEffect, useState } from "react";
import Header from "../Header";
import BetsContainer from "../BetsContainer";
import ReceiptModal from "../ReceiptModal";

function Betslip() {
  const [bets, setBets] = useState(null);
  const [stakes, setStakes] = useState({});
  const [betPlaced, setBetPlaced] = useState(false);
  const [betButtonDisabled, setBetButtonDisabled] = useState(true);
  const [oddsFilter, setOddsFilter] = useState("all");

  useEffect(() => {
    getBetInfo();
  }, [oddsFilter]);

  const getBetInfo = async () => {
    await fetch(`http://localhost:4000/${oddsFilter}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
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
    setBetButtonDisabled(false);
  };

  return betPlaced ? (
    <ReceiptModal stakes={stakes} />
  ) : (
    <span data-testid="bets-list">
      <Header setOddsFilter={setOddsFilter} />
      <BetsContainer
        bets={bets}
        betBuilder={betBuilder}
        setBetPlaced={setBetPlaced}
        betButtonDisabled={betButtonDisabled}
      />
    </span>
  );
}

export default Betslip;
