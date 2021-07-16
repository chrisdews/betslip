import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import "./Footer.css";

function Footer({ betButtonDisabled, setBetPlaced }) {
  const placeBetClickHandler = () => {
    setBetPlaced(true)
  };
  return (
    <div className={"footer"}>
      <span className={"betButton"}>
        <Button clickHandler={placeBetClickHandler} buttonDisabled={betButtonDisabled}>Bet Now</Button>
      </span>
    </div>
  );
}

Footer.propTypes = {
    betButtonDisabled: PropTypes.bool,
    setBetPlaced: PropTypes.func
};

export default Footer;
