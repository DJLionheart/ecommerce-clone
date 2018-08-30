import React from 'react';

export default function FilterItem(props) {
    const { filterActive, children } = props;
    return(
        <li className={filterActive ? 'filter_active' : 'filter_inactive'} value={filter.value}>{children}{ filterActive ? 'X' : ''}</li>
    )
}