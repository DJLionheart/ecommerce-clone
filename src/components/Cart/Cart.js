import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            cartContents: [],
            cartSubtotal: 0
        }
    }
    
    render() {

        return(
            <main className="cart_page">
                <section className="cart_left">
                    <h1 className="large_header">Your Cart</h1>
                    <h5 className="small_link"><Link to="/">Continue Shopping</Link></h5>
                </section>
                <section className="cart_right">
    
                </section>
            </main>
        )
    }
}

export default Cart;