import React from 'react'
import { Link } from 'react-router-dom';

import popupData from './popupData';

function Popup(props) {
    const { nav } = props;

    const navLinks = nav.links.map( (link, i) => {
        return(
            <li className="nav_popup_link" key={ i }><Link to={link.path}>{link.name}</Link></li>
        )
    })

    const artistLinks = popupData['artist'].map( artistLink => {
        return <li className="artist_link" key={ artistLink.path }> <span className="order_number large">{artistLink.order}</span>{ artistLink.title }</li>
    })

    return(
        <aside className={'navbar_popup' + ` ${nav}`}>
            {
                nav.category !== 'The Artist' ?
                    <section className="standard_popup">
                        <div className="popup_links">
                            <ul>
                                { navLinks }
                            </ul>
                        </div>
                        <div className="popup_photo">
                            <img src={ nav.photo } alt={ nav.alt }/>
                        </div>
                        <div className="nav_desc">
                            <h1 className="nav_h1">{ nav.title }</h1>
                            <p className="nav_desc_text">{ nav.desc }</p>
                            <h5 className="nav_more_link"><Link to={ nav.learnMore }>Learn More</Link></h5>
                        </div>

                    </section>
                 : <section className="artist_popup">
                     <ul>
                        { artistLinks }
                     </ul>
                    </section>
            }
        </aside>
    )
}

export default Popup;