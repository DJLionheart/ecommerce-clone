import React, { Component } from 'react';

import Button from '../../../buttons/Button/Button';

class FrameHeader extends Component {
    constructor() {
        super();
        this.state = {
            liner: 'Pearl Liner',
            pack: 'Single',
            quantity: 1,
        }
    }

    render() {
        // const { quantity } = this.state;
        const { product } = this.props;
        
        return(
            <article className="frame_product_page_header">
                <section className="product_img_container">
                    <img src={ product.src } alt="element frame"/>
                </section>
                <section className="frame_product_main_details">
                    <h1 className="frame_product_main_title">{ product.title }</h1>
                    <h2 className="product_price">${ product.price }</h2>
                    
                    <select className="product_selector" name="liner" id="product_liner">
                        <option value="Pearl Liner">Pearl Liner</option>
                        <option value="Black Liner">Black Liner</option>
                    </select>
                    
                    <select className="product_selector" name="pack" id="product_pack">
                        <option value="Single">Single</option>
                        <option value="Four Pack">Four Pack</option>
                    </select>

                    <select className="product_selector" name="quantity" id="product_quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>

                    <Button type="add"/>

                </section>

            </article>
        )
    }
}

export default FrameHeader;