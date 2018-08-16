import React from 'react';

import './ProductSocial.css';

function ProductSocial(props) {
    const { product } = props;
    return(
        <section className="product_social_links">
            <h4>SHARE</h4>
            <h1>Spread the word about { product.title }</h1>
            <span className="social_buttons">
                <a id="fb_button" href="https://www.facebook.com">
                    <svg className="icon facebook_icon" viewBox="7.5 2019.5 7 13">
                        <path d="M12 2019.5c-1.4 0-2.5 1.1-2.5 2.5v1.5h-2v2h2v7h2v-7h2.2l.5-2h-2.8v-1.5c0-.3.2-.5.5-.5h2.5v-2H12z"></path>
                    </svg>
                </a>
                <a id="tw_button" href="https://www.twitter.com">
                    <svg className="icon twitter_icon" viewBox="0 0 20 20">
                        <path fill="#444" d="M19.551 4.208q-.815 1.202-1.956 2.038 0 .082.02.255t.02.255q0 1.589-.469 3.179t-1.426 3.036-2.272 2.567-3.158 1.793-3.963.672q-3.301 0-6.031-1.773.571.041.937.041 2.751 0 4.911-1.671-1.284-.02-2.292-.784T2.456 11.85q.346.082.754.082.55 0 1.039-.163-1.365-.285-2.262-1.365T1.09 7.918v-.041q.774.408 1.773.448-.795-.53-1.263-1.396t-.469-1.864q0-1.019.509-1.997 1.487 1.854 3.596 2.924T9.81 7.184q-.143-.509-.143-.897 0-1.63 1.161-2.781t2.832-1.151q.815 0 1.569.326t1.284.917q1.345-.265 2.506-.958-.428 1.386-1.732 2.18 1.243-.163 2.262-.611z"></path>
                    </svg>
                </a>
                <a id="pi_button" href="https://www.pinterest.com">
                    <svg className="icon pinterest_icon" viewBox="0 0 1945 2500">
                        <path d="M847.5 8.3C432.1 54.7 18.1 390.8 1 870.9c-10.7 293.2 72.5 513.1 351.5 574.8 121.1-213.6-39.1-260.7-64-415.2-102.3-633.2 730.3-1065 1166-622.9 301.5 306.1 103 1247.8-383.2 1149.9-465.7-93.5 228-843.1-143.8-990.3C625.3 447.6 464.7 933.1 608 1174.3 524 1589 343.2 1979.8 416.4 2500 654 2327.7 734 1997.7 799.7 1653.5c119.4 72.5 183.1 147.9 335.4 159.6 561.7 43.4 875.3-560.7 798.7-1117.9C1865.6 201.1 1372.6-50.3 847.5 8.3z"></path>
                    </svg>
                </a>

            </span>
        </section>
    )
}

export default ProductSocial;