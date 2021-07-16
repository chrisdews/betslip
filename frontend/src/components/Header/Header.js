import React from "react";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown";
import styled from 'styled-components'
function Header({ setOddsFilter }) {
  return (
    <HeaderStyle>
      <h1>Betslip</h1>
      <Dropdown setOddsFilter={setOddsFilter} />
    </HeaderStyle>
  );
}

Header.propTypes = {
    setOddsFilter: PropTypes.func
};

export default Header;

const HeaderStyle = styled.div`
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  align-items: right;
  padding: 0em 1em 0em 1em;
`;