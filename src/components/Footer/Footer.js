import React from 'react';

import LinkList from './LinkList/LinkList';
import SmallLogo from '../logos/SmallLogo/SmallLogo';

import galleries from '../../assets/data/gallerylist';
import aboutUs from '../../assets/data/menu-links/aboutUs';
import explore from '../../assets/data/menu-links/explore';
import sales from '../../assets/data/menu-links/sales';
import customerService from '../../assets/data/menu-links/customerService';
import legal from '../../assets/data/menu-links/legal';

import './Footer.css';

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