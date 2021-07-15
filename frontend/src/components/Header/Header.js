import React from "react";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown";
import "./Header.css";

function Header({ setOddsFilter }) {
  return (
    <div className="header">
      <h1>Betslip</h1>
      <Dropdown setOddsFilter={setOddsFilter} />
    </div>
  );
}

Header.propTypes = {};

export default Header;
