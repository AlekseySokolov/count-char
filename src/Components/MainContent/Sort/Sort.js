import React from 'react';
import SortButtons from './SortButtons/SortButtons';
import SortingAlert from './SortingAlert';

const Sort = (props) => {
    const {html, list, sortStatus} = props
    return (
        <div className='sortContainer'>
        <SortButtons html={html} list={list} />
        <SortingAlert sortStatus={sortStatus}/>
        </div>
    )
};

export default Sort;