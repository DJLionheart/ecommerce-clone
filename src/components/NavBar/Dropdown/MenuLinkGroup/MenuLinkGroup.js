import React from 'react';
import { Link } from 'react-router-dom';

import { menu } from '../../../../assets/data/nav/dropdownData';

function MenuLinkGroup(props) {
    const { group, closeDropdown } = props;

    const menuLinks = menu[group].links.map( link => {
        return <li key={ link.path } onClick={ closeDropdown }><Link to={link.path}>{link.name}</Link></li>
    })
    return(
        <span className="menu_link_group">
            <h5 className="mlg_heading">{menu[group].name}</h5>
            <ul className="mlg_ul">
                { menuLinks }
            </ul>
        </span>
    )
}

export default MenuLinkGroup;