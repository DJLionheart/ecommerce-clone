import React from 'react';
import Button from '../../buttons/Button/Button';

function CollSpotlight(props) {
    const { collection } = props;
    return(
        <section className="collection_spot">
            <div className="collection_name">
                <h4>Collection</h4>
                <h1>{collection.name}</h1>
            </div>
            <div className="collection_spot_img_main">
                <img src={ collection.img1 } alt="collection preview"/>
            </div>
            <div className="collection_spot_bottom">
                <span className="collection_spot_btn">
                    <Button>View collection</Button>
                    <img src={ collection.img2 } alt="collection preview"/>
                    <p>{ collection.desc }</p>
                </span>

            </div>

        </section>
    )
}

export default CollSpotlight;