import React from 'react';

const RenderList = (props) => {
    const {list, displayFunction} = props
    return (
        <ul className='list'>
            { list.map((obj, index)=> displayFunction(obj, index)) }
        </ul>
    )
}

export default RenderList;