import React from 'react';

import './ArtistPreview.css';

import previewVid from '../../../assets/media/home/home-vid.mp4';

function ArtistPreview() {
    return(
    <section className="artist_preview">
        <video className="preview_vid" controls={false} autoPlay>
            <source src={previewVid} type="video/mp4"/>
        </video>
    </section>
    )
}

export default ArtistPreview;