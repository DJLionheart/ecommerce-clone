import React from 'react';

import eotSmall from '../../../assets/media/home/eot/eot_400.png';
import eotMedium from '../../../assets/media/home/eot/eot_600.png';
import eotLarge from '../../../assets/media/home/eot/eot_800.png';

function EotPreview() {
    return(
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
    )
}

export default EotPreview;