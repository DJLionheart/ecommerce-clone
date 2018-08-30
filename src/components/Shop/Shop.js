import React, { Component } from 'react';

import SideBar from './SideBar/SideBar';
import ProductCard from './ProductCard/ProductCard';

class Shop extends Component {
    render() {
        return(
            <main className="shop_page">
                <SideBar/>
                <section className="shop_products">

                </section>
            </main>
        )
    }
}

export default Shop;