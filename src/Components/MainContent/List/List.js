import React from 'react';
import SymbolInfo from './SymbolInfo';
import calculatePercentage from '../../../secondaryFunctions/calculateFunctions/calculatePercentage';

const List = (props) => {
    const {list, totalAmount} = props
    return (
        <div className='charactersList'>
            <ul className='list'>
                {list.map((obj, index) =>
                    <li key={index}>
                        <SymbolInfo
                            char={Object.keys(obj)[0]}
                            count={Object.values(obj)[0]}
                            percentOfTotal={calculatePercentage(obj, totalAmount)}/>
                    </li>)}
            </ul>
        </div>
    )
};

export default List;
