import React from 'react';

function LimitedPreview(props) {
    const { product } = props;
    return(
        <article className={ product.orientation === 'vertical' ? 'limited_preview vertical' : 'product_preview horizontal' }>
            <img src={ product.src } alt="limited edition preview"/>
        </article>
    )
}

export default LimitedPreview;