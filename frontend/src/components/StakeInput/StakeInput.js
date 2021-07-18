import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function StakeInput({ betBuilder, betName }) {
  const [stake, setStake] = useState('enter stake');
  const handleStakeInputChange = (event) => {
    const stake = event.target.value;
    setStake(stake);
    betBuilder(betName, stake);
  };

  const handleClick = () => {
    setStake('')
  }
  return (
    <InputStyle
      type="text"
      value={stake}
      aria-label="stake-input"
      onChange={(e) => {
        handleStakeInputChange(e);
      }}
      onClick={handleClick}
    ></InputStyle>
  );
}

StakeInput.propTypes = {
  betBuilder: PropTypes.func,
  betName: PropTypes.string,
};

export default StakeInput;

const InputStyle = styled.input`
  color: grey;
  border-radius: 0.5em;
  width: 6em;
  height: 2em;
  text-align: center;
  font-size: 100%;
  font: inherit;
`;