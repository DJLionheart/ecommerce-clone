import React from 'react';

function ProductCard(props) {
    const { product } = props;
    return(
        <div className="product_card">
            <img className="product_img_preview" src={product.imgPreview} alt="Product preview"/>
            <h3 className="product_card_title">{product.title}</h3>
            <h4 className="product_card_edition">{product.edition}</h4>
            <h4 className="product_card_price">{product.price}</h4>
        </div>
    )
}

export default ProductCard;