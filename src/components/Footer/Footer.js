import React from 'react';
import { Link } from 'react-router-dom';

import galleries from './gallerylist';

const galleryLinks = galleries.map( gallery => {
    return(
        <li key={gallery.name}><Link to={gallery.path}>{gallery.name}</Link></li>
    )
})

function Footer() {
    return(
        <footer>
            <h4>THE GALLERIES</h4>
            <ul className="gallery_list">
                {galleryLinks}
            </ul>

            <h4>ABOUT US</h4>
            <ul className>

            </ul>
            <h4>EXPLORE</h4>
            <ul className>

            </ul>
            <h4>SALES</h4>
            <ul className>

            </ul>
            <h4>CUSTOMER SERVICE</h4>
            <ul className>

            </ul>

            <h4>LEGAL</h4>
            <ul className>

            </ul>

            <ul className="social_links">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>YouTube</li>
            </ul>

        </footer>
    )
}

export default Footer;