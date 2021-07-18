import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BetInfo from "../BetInfo";
import Loading from "../Loading";
import BetFooter from "../BetFooter";

function BetsContainer({ bets, betBuilder, betButtonDisabled, setBetPlaced }) {
  return bets ? (
    <BetsContainerStyle>
      {bets.map((bet) => (
        <BetInfo
          key={bet.betId}
          betName={bet.name}
          bestOdds={bet.bestOdds}
          betBuilder={betBuilder}
        />
      ))}
      <BetFooter
        setBetPlaced={setBetPlaced}
        betButtonDisabled={betButtonDisabled}
      />
    </BetsContainerStyle>
  ) : (
    <Loading>loading...</Loading>
  );
}

BetsContainer.propTypes = {
  bets: PropTypes.array,
  betBuilder: PropTypes.func,
};

export default BetsContainer;

const BetsContainerStyle = styled.div`
  background-color: white;
  padding: 1em 1em 0.5em 1em;
`;
