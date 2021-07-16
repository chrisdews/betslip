import React from 'react';
import PropTypes from "prop-types";
import './Button.css'


function Button ({buttonDisabled, children, clickHandler}) {

    return (
        <button className="button" onClick={clickHandler} disabled={buttonDisabled}>
            {children}
        </button>
    );
};

Button.propTypes = {
    buttonDisabled: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

export default Button;
