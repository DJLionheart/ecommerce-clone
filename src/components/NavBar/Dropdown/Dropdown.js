import React from 'react'
import { Link } from 'react-router-dom';

import MenuLinkGroup from './MenuLinkGroup/MenuLinkGroup';

import dropdownData from '../../../assets/data/nav/dropdownData';

import workPhoto from '../../../assets/media/nav/dropdown/theWork.jpg';
import galleryPhoto from '../../../assets/media/nav/dropdown/theGalleries.jpg';
import shopPhoto from '../../../assets/media/nav/dropdown/shop.jpg'

import './Dropdown.css'

function Dropdown(props) {
    const { nav, closeDropdown } = props;

    const navLinks = dropdownData[nav].links.map( (link, i) => {
        return(
            <li className="nav_dropdown_link" key={ i }><Link to={link.path} onClick={ closeDropdown }><span className="order_number regular">{link.num}</span>  {link.name}</Link></li>
        )
    })

    const accountLinks = dropdownData.menu.links.map( link => {
        return <li className="account_link" key={ link.path } onClick={ closeDropdown }><Link to={link.path}>{ link.name }</Link></li>
    })

    return(
        <aside className="navbar_dropdown">
            {
                nav !== 'menu' ?
                    <section className="standard_dropdown">
                        <div className="dropdown_links">
                            <ul>
                                { navLinks }
                            </ul>
                        </div>
                        {
                            nav !== 'artist' ? <div>
                                <div className="dropdown_photo">
                                    <img src={ nav === 'work' ? workPhoto : nav === 'galleries' ? galleryPhoto : shopPhoto } alt={ dropdownData[nav].alt}/>
                                </div>
                                <div className="nav_desc">
                                    <h1 className="nav_h1">{ dropdownData[nav].title }</h1>
                                    <p className="nav_desc_text">{ dropdownData[nav].desc }{ dropdownData[nav].descTitle ? <i id="italics">{dropdownData[nav].descTitle}</i> : null }.</p>
                                    <h5 className="nav_more_link"><Link to={ dropdownData[nav].learnMore }>Learn More</Link></h5>
                                </div>
                            </div>
                            : null
                        }

                    </section>
                    : <section className="menu_dropdown">
                        <nav className="menu_all_links">
                            <MenuLinkGroup group="aboutUs" closeDropdown={ closeDropdown }/>
                            <MenuLinkGroup group="explore" closeDropdown={ closeDropdown }/>
                            <MenuLinkGroup group="customerService" closeDropdown={ closeDropdown }/>
                            <MenuLinkGroup group="sales" closeDropdown={ closeDropdown }/>
                            <MenuLinkGroup group="legal" closeDropdown={ closeDropdown }/>
                        </nav>
                        <nav className="menu_account_links">
                            <section>
                                <h5 className="account_heading">Account</h5>
                                <ul className="account_links">
                                    { accountLinks }
                                </ul>
                            </section>
                        </nav>
                    </section>
            }
        </aside>
    )
}

// Dropdown.defaultProps = {
//     nav: 'work'
// }

export default Dropdown;