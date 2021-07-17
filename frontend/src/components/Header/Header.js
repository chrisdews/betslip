import React from "react";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown";
import styled from "styled-components";
import oclogo from "../../images/oc-logo.png";

function Header({ setOddsFilter }) {
  return (
    <HeaderStyle>
      <TitleWrapper>
        <Title>BETSLIP</Title>
        <Logo src={oclogo} />
      </TitleWrapper>
      <Dropdown setOddsFilter={setOddsFilter} />
    </HeaderStyle>
  );
}

Header.propTypes = {
  setOddsFilter: PropTypes.func,
};

export default Header;

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: right;
  padding: 0em 1em 0em 1em;
  color: white;
`;

const Logo = styled.img`
  width: 107px;
  height: 20px;
`;

const Title = styled.h1`
  margin-top: 10px;
  margin-bottom: 0px
`;

const TitleWrapper = styled.div`
  flex-direction: column;
`;
