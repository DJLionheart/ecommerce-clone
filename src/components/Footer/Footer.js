import React from 'react';

import LinkList from './LinkList/LinkList';
import SmallLogo from '../logos/SmallLogo/SmallLogo';

import galleries from '../../assets/data/gallerylist';
import aboutUs from '../../assets/data/footer-links/aboutUs';
import explore from '../../assets/data/footer-links/explore';
import sales from '../../assets/data/footer-links/sales';
import customerService from '../../assets/data/footer-links/customerService';
import legal from '../../assets/data/footer-links/legal';

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