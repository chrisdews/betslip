import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import styled from "styled-components";
function BetFooter({ betButtonDisabled, setBetPlaced }) {
  const placeBetClickHandler = () => {
    setBetPlaced(true);
  };
  return (
    <FooterStyle>
      <BetButton>
        <Button
          clickHandler={placeBetClickHandler}
          buttonDisabled={betButtonDisabled}
        >
          BET NOW
        </Button>
      </BetButton>
    </FooterStyle>
  );
}

BetFooter.propTypes = {
  betButtonDisabled: PropTypes.bool,
  setBetPlaced: PropTypes.func,
};

export default BetFooter;

const FooterStyle = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: right;
  padding: 0em 1em 0em 1em;
`;

const BetButton = styled.span`
  margin-left: auto;
  margin-bottom: 1em;
`;
