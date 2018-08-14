import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegProductHeader extends Component {
    constructor() {
        super();
        this.state = {
            vertical: false
        }
    }

    render() {
        const { vertical } = this.state;
        const { product } = this.props;
        
        return(
            <article className={ vertical ? "product_vert_header" : "product_hor_header" }>
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