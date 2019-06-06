import React from 'react';

const SortingAlert = ({sortStatus}) => {
    return (
        <span className='sortingAlert'>
            {sortStatus === 'asc'?
            'sorted by ascending ↑' :
            sortStatus === 'desc'?
            'sorted by descending ↓' :
            ''}
        </span>
    )
};

export default SortingAlert;