import React from 'react';
import PropTypes from 'prop-types';
import StakeInput from '../../components/StakeInput'
import './BetInfo.css'


function BetInfo ({ betName, bestOdds, betBuilder }) {

    

    return (
        <div className={'betInfoContainer'}>
            <div className={'betDetailContainer'}>
                <div>{betName} </div>
                <div>{bestOdds}</div>
            </div>
            <StakeInput bestOdds={bestOdds} betBuilder={betBuilder} betName={betName}/>
        </div>
    );
};


BetInfo.propTypes = {

};


export default BetInfo;
