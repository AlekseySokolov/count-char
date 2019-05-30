import React from 'react';

const renderList = (list) => {
    return (
        <ul className='charactersList'>
            {list
                .map((obj, index)=>
                    <li key={index}>{Object.keys(obj)} = {Object.values(obj)}</li>)}
        </ul>
    )
}

export default renderList;