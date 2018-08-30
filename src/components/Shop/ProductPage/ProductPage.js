import React from 'react';
import LimitedHeader from './LimitedHeader/LimitedHeader';
import FrameHeader from './FrameHeader/FrameHeader';
import RegProductHeader from './RegProductHeader/RegProductHeader';

import products from '../../../assets/data/shop/sampleProducts';
import { getCurrentProduct } from '../../../utils/fns';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductPreview from './ProductPreview/ProductPreview';

function ProductPage(props) {
    const { productName } = props.match.params;

    const currentProduct = getCurrentProduct(products, productName);
    
    return(
        <main className="product_page">
            {
                currentProduct.edition === "Limited Edition" ? <LimitedHeader product={ currentProduct }/> : currentProduct.edition === "Element Frame" ? <FrameHeader product={ currentProduct }/> : <RegProductHeader product={ currentProduct }/>
            }
            <ProductInfo product={ currentProduct }/>
            <ProductPreview product={ currentProduct }/>
        </main>
    )
}

export default ProductPage;