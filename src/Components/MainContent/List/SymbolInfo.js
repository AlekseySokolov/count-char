import React from 'react';

const SymbolInfo = (props) => {
    const {char, count, percentOfTotal} = props
    return (
        <>
        <span>{char} = {count}</span>
        <span className='percent'>({percentOfTotal}%)</span>
        </>
    )
};

export default SymbolInfo;