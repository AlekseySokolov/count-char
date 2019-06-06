import React from 'react';
import SymbolInfo from './SymbolInfo';

const List = (props) => {
    const {list} = props
    return (
        <div className='charactersList'>
            <ul className='list'>
                {list.map((obj) =>
                    <li key={obj.char}>
                        <SymbolInfo
                            char={obj.char}
                            count={obj.count}
                            percentOfTotal={obj.percentOfTotal}
                        />
                    </li>)}
            </ul>
        </div>
    )
};

export default List;
