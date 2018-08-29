import React from 'react';

import { getGallery } from '../../../utils/fns';
import galleries from '../../../assets/data/gallerylist';

import './Gallery.css';

function Gallery(props) {
    const { galleryName } = props.match.params;
    const gallery = getGallery(galleries, galleryName);
    return(
        <div>
            <section className="gallery_hero">
                <img className="hero_img" src={gallery.bgUrl} alt="gallery"/>
            </section>
            {
                gallery.regGallery ? <h5>Fine Art Gallery</h5> : <h5>{gallery.altHeader}</h5> 
            }
            {
                gallery.altName ? <h1>{gallery.altName}</h1> : <h1>LIK Fine Art {gallery.name}</h1> 
            }
        </div>
    )
}

export default Gallery;