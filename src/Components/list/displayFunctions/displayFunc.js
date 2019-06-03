import React from 'react';
import calculatePercentage from '../../../secondaryFunctions/calculateFunctions/calculatePercentage';
import toDivide from '../../../secondaryFunctions/calculateFunctions/calculateToDivide';
import find from '../../../secondaryFunctions/find';

const displayFunc = (obj, totalAmount) => {
    return (
        <>
        <span>{Object.keys(obj)} = {Object.values(obj)}</span>
        <span className='percent'>({calculatePercentage(obj, totalAmount)}%)</span>
        <span>({toDivide(obj)})</span>
        <span> {find(obj)}</span>
        </>
    )
};

export default displayFunc;
