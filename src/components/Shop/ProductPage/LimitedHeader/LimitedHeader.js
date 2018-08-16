import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegProductHeader extends Component {

    render() {
        const { product } = this.props;
        const { orientation } = product;
        
        return(
            <article className={ orientation ? orientation === "vertical" ? "product_vert_header" : "product_hor_header" : "product_standard_header"}>
                <section className="product_img_container">
                    <img src={ product.imgSrc } alt={ product.alt }/>
                </section>
                <section className="product_main_details">
                    <h1 className="product_main_title">{ product.title }</h1>
                    <h4 className="product_main_collection">{ product.collection }</h4>
                    <h2><Link to="/pages/contact">Request a Quote</Link></h2>
                </section>
            </article>
        )
    }
}

export default RegProductHeader;