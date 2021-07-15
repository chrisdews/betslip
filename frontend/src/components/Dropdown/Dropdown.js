import React from "react";
import PropTypes from "prop-types";

function Dropdown({ setOddsFilter }) {
  const handleSelect = (e) => {
    setOddsFilter(e.target.value);
  };

  return (
    <select name="selectList" id="selectList" onChange={handleSelect}>
      <option value="">Filter</option>
      <option value="decimalOddsLessThanTwo">Odds less than 2</option> 
      <option value="decimalOddsMoreThanTwo">Odds greater than 2</option>
    </select>
  );
}

Dropdown.propTypes = {};

export default Dropdown;
