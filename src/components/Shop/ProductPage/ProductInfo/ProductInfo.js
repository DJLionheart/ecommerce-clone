import React from 'react';
import LimitedInfo from './RegInfo/RegInfo';
import RegInfo from './RegInfo/RegInfo';

function ProductSocial(props) {
    const { product } = props;
    return(
        <section className="product_info">
            {
                product.edition === "Limited Edition" ? <LimitedInfo product={ product }/> : <RegInfo product={ product }/>
            }
        </section>
    )
}

export default ProductSocial;