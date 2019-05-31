import React from 'react';

const displayFuncCountChar = (obj, index) => {
    return (
        <li key={index}>{Object.keys(obj)} = {Object.values(obj)}</li>
    )
}

export default displayFuncCountChar;