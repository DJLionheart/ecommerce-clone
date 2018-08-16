import React from 'react';

import extra from './extraProductInfo';
import ProductSpecs from '../ProductSpecs';

function RegInfo(props) {
    console.log('Regular Info!!!!')
    const { product } = props;

    return(
        <section>
            <p className="product_info_p">{ product.desc }</p>
            {
                product.collection === "Open Edition" ? <p></p> : <p className={ product.collection === "Library Collection" ? "extra book_warning" : "extra product_details" }>{ extra[product.collection] }</p>
            }
            <ProductSpecs product={ product }/>
        </section>
    )
}

export default RegInfo;