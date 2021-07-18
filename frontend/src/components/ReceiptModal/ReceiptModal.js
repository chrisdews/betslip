import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import oclogo from "../../images/oc-logo.png";

function ReceiptModal({ stakes }) {
  const stakeReducer = (stakes) => {
    const stakeAmounts = Object.values(stakes);
    return stakeAmounts.map((str) => parseFloat(str)).reduce((x, y) => x + y);
  };

  return (
    stakes && (
      <ReceiptContainer>
        <Title>RECEIPT</Title>
        <Logo src={oclogo} />
        <ReceiptStyle>
          <h3>Your bet has been placed.</h3>
          <h4>
            Total stake: <b>£{stakeReducer(stakes)}</b>
          </h4>
        </ReceiptStyle>
          
      </ReceiptContainer>
    )
  );
}

ReceiptModal.propTypes = {
  stakes: PropTypes.object,
};

export default ReceiptModal;

const ReceiptStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  color: grey;
  background-color: white;
  border-radius: 1em;
  height: 40vh;

  -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @-webkit-keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(1000px);
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(1000px);
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Logo = styled.img`
  width: 107px;
  height: 20px;
`;

const ReceiptContainer = styled.div`
  margin: 1em;
`;

const Title = styled.h1`
  margin-top: 10px;
  margin-bottom: 0px
`;
