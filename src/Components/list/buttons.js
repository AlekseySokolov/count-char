import React from 'react';
const buttons = (getList, asc, desc, html, list) => {
    return (
        <>
        <button onClick={() => getList(html) && asc(list)}>Asc</button>
        <button onClick={() => getList(html) && desc(list)}>Desc</button>
        </>
    )
}
export default buttons;