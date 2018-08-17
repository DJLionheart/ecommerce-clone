import React from 'react';
import Button from '../buttons/Button/Button';

const waterColl = {
    name: "Water",
    desc: "Drink in every detail. The source of all life is Master Photographer Peter Lik’s main inspiration behind this captivating series of waterfalls, rivers, lakes, oceans, and ponds."
}
function CollectionCover(props) {
    const { collection } = props;
    return(
        <div>
            <h4>COLLECTION</h4>
            <img id="collection_main" src={ collection.img1 } alt="collection preview"/>
            <h1>{collection.name || waterColl.name}</h1>
            <p>{collection.desc || waterColl.desc}</p>
            <span className="collection_btn">
                <Button type="collection"/>
            </span>
            <img src={ collection.img2 } alt="collection preview"/>
        </div>
    )
}

export default CollectionCover;