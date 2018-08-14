import React from 'react';
import LimitedHeader from './LimitedHeader/LimitedHeader';
import FrameHeader from './FrameHeader/FrameHeader';
import RegProductHeader from './RegProductHeader/RegProductHeader';

function ProductPage(props) {
    const { product } = this.props;
    
    return(
        <main className="product_page">
            {
                product.type === "limited" ? <LimitedHeader product={ product }/> : product.type === "frame" ? <FrameHeader product={ product }/> : <RegProductHeader product={ product }/>
            }
            
        </main>
    )
}