import React from 'react'
import { Link } from 'react-router-dom';

import popupData from '../../../assets/data/nav/popupData';

import workPhoto from '../../../assets/media/nav/popups/theWork.jpg';
import galleryPhoto from '../../../assets/media/nav/popups/theGalleries.jpg';
import shopPhoto from '../../../assets/media/nav/popups/shop.jpg'

import './Popup.css'

function Popup(props) {
    const { nav } = props;

    const navLinks = popupData[nav].links.map( (link, i) => {
        return(
            <li className="nav_popup_link" key={ i }><Link to={link.path}><span className="order_number regular">{link.num}</span>{link.name}</Link></li>
        )
    })

    const artistLinks = popupData['artist'].links.map( artistLink => {
        return <li className="artist_link" key={ artistLink.path }><Link to={ artistLink.path }><span className="order_number large">{artistLink.num}</span>{ artistLink.title }</Link></li>
    })

    return(
        <aside className={'navbar_popup' + ` ${nav}`}>
            {
                nav !== 'artist' || nav !== 'menu' ?
                    <section className="standard_popup">
                        <div className="popup_links">
                            <ul>
                                { navLinks }
                            </ul>
                        </div>
                        <div className="popup_photo">
                            <img src={ nav === 'work' ? workPhoto : nav === 'galleries' ? galleryPhoto : shopPhoto } alt={ popupData[nav].alt}/>
                        </div>
                        <div className="nav_desc">
                            <h1 className="nav_h1">{ popupData[nav].title }</h1>
                            <p className="nav_desc_text">{ popupData[nav].desc }</p>
                            <h5 className="nav_more_link"><Link to={ popupData[nav].learnMore }>Learn More</Link></h5>
                        </div>

                    </section>
                    : nav === 'artist' ? <section className="artist_popup">
                        <ul>
                        { artistLinks }
                        </ul>
                    </section> 
                    : <section className="menu_popup">
                        <nav className="menu_nav">
                            <section>
                                <h5 className="account_headingg">Account</h5>
                                <ul className="menu_links">
                                    

                                </ul>
                            </section>
                        </nav>
                    </section>
            }
        </aside>
    )
}

// Popup.defaultProps = {
//     nav: 'work'
// }

export default Popup;