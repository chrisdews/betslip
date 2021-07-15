import React from "react";
import PropTypes from "prop-types";

function ReceiptModal({ stakes }) {
  const stakeReducer = (stakes) => {
    const stakeAmounts = Object.values(stakes);
    return stakeAmounts.map((str) => parseFloat(str)).reduce((x, y) => x + y);
  };

  return (
    stakes && (
      <>
        <h1>Receipt</h1>
        <p>Your bet has been placed.</p>
        <div>Total stake: £{stakeReducer(stakes)}</div>
      </>
    )
  );
}

ReceiptModal.propTypes = {};

export default ReceiptModal;
