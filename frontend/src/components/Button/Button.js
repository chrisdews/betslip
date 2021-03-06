import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Button = ({ buttonDisabled, children, clickHandler }) =>  {
  return (
    <ButtonStyle onClick={clickHandler} disabled={buttonDisabled}>
      {children}
    </ButtonStyle>
  );
}

Button.propTypes = {
  buttonDisabled: PropTypes.bool,
  clickHandler: PropTypes.func,
};

export default Button;

const ButtonStyle = styled.button`
  padding: 1em;
  border: 1px solid white;
  border-radius: 0.5em;
  font-size: 100%;
  font: inherit;
`;
