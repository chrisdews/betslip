import React from "react";
import PropTypes from "prop-types";
import StakeInput from "../../components/StakeInput";
import styled from "styled-components";

function BetInfo({ betName, bestOdds, betBuilder }) {
  return (
    <BetInfoContainer>
      <BetDetailContainer>
        <div>{betName} </div>
        <div>{bestOdds}</div>
      </BetDetailContainer>
      <StakeInput
        bestOdds={bestOdds}
        betBuilder={betBuilder}
        betName={betName}
      />
    </BetInfoContainer>
  );
}

BetInfo.propTypes = {
  betName: PropTypes.string,
  bestOdds: PropTypes.number,
  betBuilder: PropTypes.func,
};

export default BetInfo;

const BetInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid white;
  border-radius: 1em;
  padding: 2em;
  margin: 1em;
  background-color: rgb(0, 24, 46);
`;

const BetDetailContainer = styled.div`
  flex-direction: column;
`;
