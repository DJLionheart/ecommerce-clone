import React from 'react';

import './ArtistPreview.css';

import previewVid from '../../../assets/media/home/home-vid.mp4';

function ArtistPreview() {
    return(
    <section className="artist_preview">
        <video className="preview_vid" controls={false} autoPlay>
            <source src={previewVid} type="video/mp4"/>
        </video>
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

export default ArtistPreview;