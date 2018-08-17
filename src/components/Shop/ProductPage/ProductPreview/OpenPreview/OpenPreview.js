import React from 'react';


const sofa = 'https://cdn.shopify.com/s/files/1/2486/4354/t/3/assets/Peter-Lik-Scale-Couch-Horizontal_866x.png';

function OpenPreview(props) {
    const { product } = props;

    return(
        <article className="open_preview">
            <img src={ product.src } alt="open edition preview"/>
            <img src={ sofa } alt="size estimation"/>
            <p id="open_preview_size">*Size estimation based on 8' wide couch</p>
        </article>
    )
}

export default OpenPreview;