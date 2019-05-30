import React from 'react';

const renderList = (list) => {
    return (
        <ul className='charactersList'>
            {list
                .map((value, index)=>
                    <li key={index}>{value.keys().next().value} = {value.values().next().value}</li>)}
        </ul>
    )
}

export default renderList;