import React, { Component } from 'react';

import navLogo from '../../assets/media/nav/navLogo.svg';
import search from '../../assets/media/nav/search.svg';
import cart from '../../assets/media/nav/cart.svg';
import menu from '../../assets/media/nav/menu.svg';
import closeMenu from '../../assets/media/nav/closeMenu.svg';

import './NavBar.css';

class NavBar extends Component {
    render() {
        return(
            <header>
                <div className="logo_container">
                    <svg className="nav_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 319.5 81.7">
                        <path d="M96.6 36.2h28.2v5.2h-22.2v7.1h19.1v5.2h-19.1v13.2h-6zm32.4 0h6v30.7h-6zm10.4 0h6.4l20.5 22.2V36.2h5.7v30.7h-5.5L145.2 44v22.9h-5.8zm37.1 0h27.4v5.2h-21.5v7.1H201v5.2h-18.6v8.1h22.1v5.1h-28zm60.9 18.5L231 41l-6.4 13.7h12.8zm-9.8-18.5h6.8l14.9 30.7H243l-3.2-7h-17.7l-3.2 7h-6.4l15.1-30.7zm42.1 13.7c4.9 0 7.4-.7 7.4-4.3 0-3.6-2.5-4.3-7.4-4.3h-11.6v8.6h11.6zm-17.6-13.7h18.4c7.3 0 12.5 1.6 12.5 9.2 0 5.7-4 8.8-8.6 9l9.4 12.5h-7.4l-8.9-12.1H258v12.1h-6V36.2zm47.7 5.2h-13.7v-5.2h33.4v5.2h-13.7v25.5h-6zM6.3 75.3h69v-69h-69v69zm75.4 6.4H0V0h81.7v81.7zm-20-45.3h5v6.3H34.8v-6.3h18.5l-9.8-8.1v-7l9.4 7.8 13.9-8.6V28l-8.6 5.4 3.5 3zm5 18.4h-5.8v-6.4h5.8v6.4zm-9.3 0h-19v-6.4h19v6.4zm9.3 12.1H34.8v-6.3h31.9v6.3z" class="st0">
                        </path>
                    </svg>
                </div>
                <ul>
                    <li className="nav_li">THE WORK</li>
                    <li className="nav_li">THE GALLERIES</li>
                    <li className="nav_li">THE ARTIST</li>
                    <li className="nav_li">SHOP</li>
                </ul>
                <ul className="nav_btns">
                    <li className="nav_icon">
                        <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-search" viewBox="0 0 20 20">
                            <path d="M7.5 2.5c2.8 0 5 2.2 5 5 0 1-.3 2-.9 2.9l-.5.7-.7.5c-.9.6-1.9.9-2.9.9-2.8 0-5-2.2-5-5s2.2-5 5-5m0-2.5C3.4 0 0 3.4 0 7.5S3.4 15 7.5 15c1.6 0 3.1-.5 4.3-1.4l6 6c.2.2.6.4.9.4s.6-.1.9-.4c.5-.5.5-1.3 0-1.8l-6-6c.9-1.2 1.4-2.7 1.4-4.3C15 3.4 11.6 0 7.5 0z">
                            </path>
                        </svg>
                    </li> 
                    <li className="nav_icon">
                        <span className="cart_btn">
                            <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-cart" viewBox="0 0 18 18">
                                <path class="st0" d="M17.9 2.1l-1.3 5.6c-.2.8-.8 1.3-1.6 1.3H4.5v2.2h11.2c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1H3.9c-.9 0-1.7-.8-1.7-1.7V2.2H1.1C.5 2.2 0 1.7 0 1.1 0 .5.5 0 1.1 0h15.2c1.1 0 1.9 1 1.6 2.1zM5.1 14.6c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7-.9 0-1.7-.8-1.7-1.7 0-.9.7-1.7 1.7-1.7zm9 0c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7s-1.7-.8-1.7-1.7c0-.9.7-1.7 1.7-1.7z">
                                </path>
                            </svg>
                            0
                        </span>
                    </li> 
                    <li className="nav_icon">
                        <svg id="burg" viewBox="0 0 28 28" width="100%" height="100%">
                            <rect class="burger__top" y="6" width="28" height="2" data-svg-origin="14 7" transform="matrix(1,0,0,1,0,0)">
                            </rect>
                            <rect class="burger__mid" y="13" width="28" height="2" data-svg-origin="14 14" transform="matrix(1,0,0,1,0,0)">
                            </rect>
                            <rect class="burger__bot" y="20" width="28" height="2" data-svg-origin="14 21" transform="matrix(1,0,0,1,0,0)">
                            </rect>
                        </svg>
                    </li> 
                </ul>

            </header>
        )
    }
}

export default NavBar;