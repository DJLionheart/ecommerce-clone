import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = props => {
    return(
        <li className="footer_link">
            <Link to={props.path}>{props.name}</Link>
        </li>
    )
};

function LinkList(props) {
    const footerLinks = props.sectionLinks.map( link => {
        return(
            <FooterLink key={link.path} name={link.name} path={link.path}/>
        )
    });

    return(
        <nav>
            <h5 className="footer_section_header">{ props.sectionHeader }</h5>
            <ul className="footer_link_list">
                { footerLinks }
            </ul>
        </nav>
    )
}

export default LinkList;