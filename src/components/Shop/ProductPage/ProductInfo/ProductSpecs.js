import React from 'react';

function ProductSpecs(props) {
    const { product } = props;

    const productSpecs = product.specs.map( (spec, index) => {
        return(
            <p className="product_specs_p" key={ index }>{ spec }</p>
        )
    })
    return(
        <div className="product_specs">
            <h4 className="product_specs_header">Product Specifications</h4>
            {
                productSpecs
            }
        </div>
    )
}

export default ProductSpecs;