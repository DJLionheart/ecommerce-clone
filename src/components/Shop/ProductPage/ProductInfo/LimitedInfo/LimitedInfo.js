import React from 'react';

function LimitedInfo(props) {
    const { product } = props;
    return(
        <section>
            <h4 className="product_location">{ product.location }</h4>
            <p className="product_info_p">{ product.info }</p>
            <h3 className="limited_info">{ product.limitedInfo }</h3>
        </section>
    )
}

export default LimitedInfo;