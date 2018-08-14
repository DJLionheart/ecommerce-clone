import React from 'react';

const waterColl = {
    coll_name: "Water",
    coll_desc: "Drink in every detail. The source of all life is Master Photographer Peter Lik’s main inspiration behind this captivating series of waterfalls, rivers, lakes, oceans, and ponds."
}
function CollectionCover(props) {
    return(
        <div>
            <h4>COLLECTION</h4>
            <h1>{props.coll_name || waterColl.coll_name}</h1>
            <p>{props.coll_desc || waterColl.coll_desc}</p>
            <button>VIEW COLLECTION</button>
        </div>
    )
}

export default CollectionCover;