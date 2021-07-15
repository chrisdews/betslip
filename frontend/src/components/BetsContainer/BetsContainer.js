import React from "react";
import PropTypes from "prop-types";
import BetInfo from "../BetInfo";

function BetsContainer({ bets, betBuilder }) {
  return bets ? (
    <div>
      {bets.map((bet) => (
        <BetInfo key={bet.betId} betName={bet.name} bestOdds={2.3} betBuilder={betBuilder} />
      ))}
    </div>
  ) : (
    "loading"
  );
}

BetsContainer.propTypes = {};

export default BetsContainer;
