import React from 'react';
import { Link } from 'react-router-dom';

import LinkList from './LinkList/LinkList';
import galleries from './gallerylist';
import aboutUs from './aboutUs';
import explore from './explore';
import sales from './sales';
import customerService from './customerService';
import legal from './legal';
import SmallLogo from '../logos/SmallLogo/SmallLogo';



function Footer() {
    return(
        <footer>
            <LinkList sectionHeader="THE GALLERIES" sectionLinks={ galleries }/>
            <LinkList sectionHeader="ABOUT US" sectionLinks={ aboutUs }/>
            <LinkList sectionHeader="EXPLORE" sectionLinks={ explore }/>
            <LinkList sectionHeader="SALES" sectionLinks={ sales }/>
            <LinkList sectionHeader="CUSTOMER SERVICE" sectionLinks={ customerService }/>
            <LinkList sectionHeader="LEGAL" sectionLinks={ legal }/>
            <ul className="social_links">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>YouTube</li>
            </ul>
            <div className="footer_logo_container">
                <SmallLogo/>
            </div>
        </footer>
    )
}

export default Footer;