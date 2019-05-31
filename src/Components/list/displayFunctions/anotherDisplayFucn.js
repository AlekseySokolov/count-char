import React from 'react';

const anotherDisplayFunc = (obj, index) => {
    return (
        <li key={index}>{Object.values(obj)}</li>
    )
}

export default anotherDisplayFunc;