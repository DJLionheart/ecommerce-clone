import React from 'react';
import LimitedPreview from './LimitedPreview/LimitedPreview';
import OpenPreview from './OpenPreview/OpenPreview';
import RegPreview from './RegPreview/RegPreview';

function ProductPreview(props) {
    const { product } = props
    return(
        <article className="product_preview">
            {
                product.edition === 'Limited Edition' ? <LimitedPreview product={ product }/> : product.edition === 'Open Edition' ? <OpenPreview product={ product }/> : <RegPreview product={ product }/>
            }
        </article>
    )
}

export default ProductPreview;