import React from 'react';
const Buttons = (props) => {
    const { html, list, getList, asc, desc} = props
    return (
        <div className='btnContainer'>
        <button className='btn' onClick={() => getList(html) && asc(list)}>Asc</button>
        <button className='btn' onClick={() => getList(html) && desc(list)}>Desc</button>
        </div>
    )
};
export default Buttons;