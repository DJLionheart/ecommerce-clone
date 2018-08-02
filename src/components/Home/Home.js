import React, { Component } from 'react';

import './Home.css';

import eotSmall from '../../assets/media/home/eot/eot_400.png';
import eotMedium from '../../assets/media/home/eot/eot_600.png';
import eotLarge from '../../assets/media/home/eot/eot_800.png';

import previewVid from '../../assets/media/home/home-vid.mp4';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            spotlight_visible: false
        }
    }

    render() {
        return(
            <main>
                <section className="home_header">
                    <button className="home_more">
                    <svg aria-hidden="true" className="more_icon" viewBox="0 0 18 16">
                        <path d="M17 2h-1V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 3v10H1V1h14v1H3a1 1 0 0 0-1 1zm13 2.5A1.5 1.5 0 1 1 13.5 4 1.5 1.5 0 0 1 15 5.5zm1 8.5H4v-2l3.5-6 4 5h1L16 8z"></path>
                    </svg>
                    </button>
                </section>
                <section className="product_spotlight">
                    <img src={eotSmall} alt="equation of time" srcSet={`${eotSmall} 400w, ${eotMedium} 600w, ${eotLarge} 800w`}/>
                    <h3>Peter Lik</h3>
                    <h1>Equation of Time</h1>
                    <p>A book by definition only, this epic collection of world-class photography showcases Peter's most stunning visions from the world around us. This impressive 106-pound book is a virtual gallery in itself.</p>
                    <button>
                        LEARN MORE
                        <svg aria-hidden="true" className="btn_right_arrow" viewBox="0 0 22.3 13.7">
                            <path d="M15.6 0l-.7.7 5.5 5.7H0v1h20.4L14.9 13l.7.7 6.7-6.8z">
                            </path>
                        </svg>
                    </button>
                </section>
                <section className="artist_preview">
                    <video className="preview_vid" controls="false" autoPlay>
                        <source src={previewVid} type="video/mp4"/>
                    </video>
                </section>
            </main>
        )
    }
}

export default Home;