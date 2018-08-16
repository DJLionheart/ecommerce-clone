import React from 'react';
import LimitedInfo from './LimitedInfo/LimitedInfo';
import RegInfo from './RegInfo/RegInfo';
import ProductSocial from '../ProductSocial/ProductSocial';

function ProductInfo(props) {
    const { product } = props;
    console.log(product);
    return(
        <section className="product_info">
            <ProductSocial product={ product }/>
            {
                product.edition === "Limited Edition" ? <LimitedInfo product={ product }/> : <RegInfo product={ product }/>
            }
        </section>
    )
}

export default ProductInfo;