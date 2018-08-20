import React from 'react';

import './ArtistPreview.css';

import previewVid from '../../../assets/media/home/home-vid.mp4';
import Button from '../../buttons/Button/Button';

function ArtistPreview() {
    return(
    <section className="artist_preview">
        <video className="preview_vid" controls={false} autoPlay>
            <source src={previewVid} type="video/mp4"/>
        </video>
        <Button variant="framed">Learn more</Button>    
    </section>
    )
}

export default ArtistPreview;