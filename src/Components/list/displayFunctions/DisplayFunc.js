import React from 'react';
import calculatePercentage from '../../../secondaryFunctions/calculateFunctions/calculatePercentage';

const displayFunc = (props) => {
    const {obj, totalAmount} = props
    return (
        <>
        <span>{Object.keys(obj)} = {Object.values(obj)}</span>
        <span className='percent'>({calculatePercentage(obj, totalAmount)}%)</span>
        </>
    )
};
export default displayFunc;



