import React from 'react';
import './Button.css'


function Button ({buttonDisabled, children, clickHandler}) {

    return (
        <button className="button" onClick={clickHandler} disabled={buttonDisabled}>
            {children}
        </button>
    );
};


export default Button;
