import React from 'react';
import LimitedHeader from './LimitedHeader/LimitedHeader';
import FrameHeader from './FrameHeader/FrameHeader';
import RegProductHeader from './RegProductHeader/RegProductHeader';

import products from './sampleProducts';

function ProductPage(props) {
    const { productName } = this.props.match.params;
    
    return(
        <main className="product_page">
            {
                product.edition === "Limited Edition" ? <LimitedHeader product={ product }/> : product.edition === "Element Frame" ? <FrameHeader product={ product }/> : <RegProductHeader product={ product }/>
            }
            
        </main>
    )
}

export default ProductPage;