import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import FullLogo from '../logos/FullLogo/FullLogo';
import Popup from './Popup/Popup';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            popupOpen: false,
            popupContents: ''
        }

        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.setPopup = this.setPopup.bind(this);
    } 

    openPopup() {
        this.setState({
            popupOpen: true
        })
    }

    closePopup() {
        this.setState({
            popupOpen: false
        })
    }

    setPopup(evt) {
        this.setState({
            popupContents: evt.target.value
        })
    }

    render() {
        const { popupOpen, popupContents } = this.state;

        return(
            <header>
                <div className="logo_container">
                    <Link to="/"><FullLogo/></Link>
                </div>
                <ul onClick={ this.openPopup }>
                    <li className="nav_li" value="work" onClick={ e => this.setPopup(e) }>THE WORK</li>
                    <li className="nav_li" value="galleries" onClick={ e => this.setPopup(e) }>THE GALLERIES</li>
                    <li className="nav_li" value="artist" onClick={ e => this.setPopup(e) }>THE ARTIST</li>
                    <li className="nav_li" value="shop" onClick={ e => this.setPopup(e) }>SHOP</li>
                </ul>
                <ul className="nav_btns">
                    <li className="nav_icon">
                        <svg className="icon search_icon" viewBox="0 0 20 20">
                            <path d="M7.5 2.5c2.8 0 5 2.2 5 5 0 1-.3 2-.9 2.9l-.5.7-.7.5c-.9.6-1.9.9-2.9.9-2.8 0-5-2.2-5-5s2.2-5 5-5m0-2.5C3.4 0 0 3.4 0 7.5S3.4 15 7.5 15c1.6 0 3.1-.5 4.3-1.4l6 6c.2.2.6.4.9.4s.6-.1.9-.4c.5-.5.5-1.3 0-1.8l-6-6c.9-1.2 1.4-2.7 1.4-4.3C15 3.4 11.6 0 7.5 0z">
                            </path>
                        </svg>
                    </li> 
                    <li className="nav_icon">
                        <span className="cart_btn">
                            <svg className="icon cart_icon" viewBox="0 0 18 18">
                                <path d="M17.9 2.1l-1.3 5.6c-.2.8-.8 1.3-1.6 1.3H4.5v2.2h11.2c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1H3.9c-.9 0-1.7-.8-1.7-1.7V2.2H1.1C.5 2.2 0 1.7 0 1.1 0 .5.5 0 1.1 0h15.2c1.1 0 1.9 1 1.6 2.1zM5.1 14.6c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7-.9 0-1.7-.8-1.7-1.7 0-.9.7-1.7 1.7-1.7zm9 0c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7s-1.7-.8-1.7-1.7c0-.9.7-1.7 1.7-1.7z">
                                </path>
                            </svg>
                            0
                        </span>
                    </li> 
                    <li className="nav_icon">
                        <svg id="burg" viewBox="0 0 28 28" width="100%" height="100%">
                            <rect className="menu_top" y="6" width="28" height="2" data-svg-origin="14 7" transform="matrix(1,0,0,1,0,0)">
                            </rect>
                            <rect className="menu_middle" y="13" width="28" height="2" data-svg-origin="14 14" transform="matrix(1,0,0,1,0,0)">
                            </rect>
                            <rect className="menu_bottom" y="20" width="28" height="2" data-svg-origin="14 21" transform="matrix(1,0,0,1,0,0)">
                            </rect>
                        </svg>
                    </li> 
                </ul>
                { popupOpen ? <Popup nav={ popupContents }/> : null}
            </header>
        )
    }
}

export default NavBar;