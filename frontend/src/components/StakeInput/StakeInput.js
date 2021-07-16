import React, { useState } from "react";
import PropTypes from "prop-types";

function StakeInput({ betBuilder, betName }) {
  const [stake, setStake] = useState(0);
  const handleStakeInputChange = (event) => {
    const stake = event.target.value;
    setStake(stake);
    betBuilder(betName, stake);
  };
  return (
    <input
      type="text"
      value={stake}
      aria-label="stake-input"
      onChange={(e) => {
        handleStakeInputChange(e);
      }}
    ></input>
  );
}

StakeInput.propTypes = {
  betBuilder: PropTypes.func,
  betName: PropTypes.string,
};

export default StakeInput;
