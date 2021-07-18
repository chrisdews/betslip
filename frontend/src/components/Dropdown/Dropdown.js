import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Dropdown({ setOddsFilter }) {
  const handleSelect = (e) => {
    setOddsFilter(e.target.value);
  };

  return (
    <DropdownStyle name="selectList" id="selectList" onChange={handleSelect}>
      <OptionStyle value="all">Filter</OptionStyle>
      <OptionStyle value="decimalOddsLessThanTwo">Odds less than 2</OptionStyle> 
      <OptionStyle value="decimalOddsMoreThanTwo">Odds greater than 2</OptionStyle>
    </DropdownStyle>
  );
}

Dropdown.propTypes = {
  setOddsFilter: PropTypes.func,
};

export default Dropdown;

const DropdownStyle = styled.select`
  border-radius: 1em;
  margin: auto;
  margin-right: 1em;
  font-size: 100%;
  font: inherit;
  width: 8em;
`;


const OptionStyle = styled.option `

`