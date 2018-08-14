import React from 'react';

import bookWarning from './bookWarning';
import ProductSpecs from '../ProductSpecs';

function RegInfo(props) {
    const { product } = props;

    return(
        <section>
            <p className="product_info_p">{ product.info }</p>
            {
                product.type === "book" ? <p className="book_warning">{ bookWarning }</p> : <p></p>
            }
            <ProductSpecs product={ product }/>
        </section>
    )
}

export default RegInfo;