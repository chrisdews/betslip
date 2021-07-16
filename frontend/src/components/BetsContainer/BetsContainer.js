import React from "react";
import PropTypes from "prop-types";
import BetInfo from "../BetInfo";

function BetsContainer({ bets, betBuilder }) {
  return bets ? (
    <div>
      {bets.map((bet) => (
        <BetInfo
          key={bet.betId}
          betName={bet.name}
          bestOdds={bet.bestOdds}
          betBuilder={betBuilder}
        />
      ))}
    </div>
  ) : (
    "loading"
  );
}

BetsContainer.propTypes = {
  bets: PropTypes.array,
  betBuilder: PropTypes.func,
};

export default BetsContainer;
