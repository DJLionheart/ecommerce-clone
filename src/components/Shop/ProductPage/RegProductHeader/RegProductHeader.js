import React, { Component } from 'react';

class RegProductHeader extends Component {
    constructor() {
        super();
        this.state = {
            panorama: false,
            quantity: 1,
        }
    }

    render() {
        const { panorama, quantity } = this.state;
        const { product } = this.props;
        
        return(
            <article className="product_page_header">
                <section className="product_img_container">
                    <img src={ product.imgSrc } alt={ product.alt }/>
                </section>
                <section className="product_main_details">
                    <h1 className="product_main_title">{ product.title }</h1>
                    <h4 className="product_main_collection">{ product.collection }</h4>
                    <p className="product_main_description">{product.description}</p>
                </section>

            </article>
        )
    }
}

export default RegProductHeader;