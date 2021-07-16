import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import styled from "styled-components";
function Footer({ betButtonDisabled, setBetPlaced }) {
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
          Bet Now
        </Button>
      </BetButton>
    </FooterStyle>
  );
}

Footer.propTypes = {
  betButtonDisabled: PropTypes.bool,
  setBetPlaced: PropTypes.func,
};

export default Footer;

const FooterStyle = styled.div`
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  align-items: right;
  padding: 0em 1em 0em 1em;
`;

const BetButton = styled.span`
  margin-left: auto;
`;
