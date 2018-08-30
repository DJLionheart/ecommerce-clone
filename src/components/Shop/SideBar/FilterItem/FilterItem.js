import React from 'react';

export default function FilterItem(props) {
    const { filterActive, value, children } = props;
    return(
        <li className={filterActive ? 'filter_active' : 'filter_inactive'} value={value}>{children}{ filterActive ? <button>X</button> : ''}</li>
    )
}