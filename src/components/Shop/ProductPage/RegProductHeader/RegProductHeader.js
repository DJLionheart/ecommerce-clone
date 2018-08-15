import React, { Component } from 'react';

class RegProductHeader extends Component {
    constructor() {
        super();
        this.state = {
            quantity: 1,
        }
    }

    render() {
        // const { quantity } = this.state;
        const { product } = this.props;
        
        return(
            <article className="reg_product_page_header">
                <section className="product_img_container">
                    <img src={ product.imgSrc } alt={ product.alt }/>
                </section>
                <section className="product_main_details">
                    <h1 className="product_main_title">{ product.title }</h1>
                    {
                        product.edition === "Element Pack" ? <span></span> : <h4 className="product_main_collection">{ product.edition }</h4>
                    }
                    <h2 className="product_price">${ product.price }</h2>
                    <select name="quantity" id="product_quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>


                </section>

            </article>
        )
    }
}

export default RegProductHeader;