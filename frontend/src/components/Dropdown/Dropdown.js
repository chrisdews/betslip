import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Dropdown({ setOddsFilter }) {
  const handleSelect = (e) => {
    setOddsFilter(e.target.value);
  };

  return (
    <DropdownStyle>
      <select name="selectList" id="selectList" onChange={handleSelect}>
        <option value="all">Filter</option>
        <option value="decimalOddsLessThanTwo">Odds less than 2</option> 
        <option value="decimalOddsMoreThanTwo">Odds greater than 2</option>
      </select>
    </DropdownStyle>
  );
}

Dropdown.propTypes = {
  setOddsFilter: PropTypes.func,
};

export default Dropdown;

const DropdownStyle = styled.span`
  border-radius: 3px;
  margin: auto;
  margin-right: 0px
`;
