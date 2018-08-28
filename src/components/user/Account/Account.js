import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import AddressModal from '../Addresses/AddressModal/AddressModal';


class Account extends Component {
    constructor() {
        super();
        this.state = {
            admin: false,
            orders: [],
            address: []
        }
    }

    render() {
        return(
            <main className="account_page">
                <article className="account_details">
                    <section className="details_header">
                        <h1 className="account_heading">Account Details</h1>
                        <h5 className="logout_link">Logout</h5>
                    </section>
                    <section className="order_history">
                        <p className="account_text">You haven't placed any orders yet.</p>
                    </section>
                </article>
                <hr/>
                <article className="account_addresses">
                    <section className="account_name">
                        <h1 className="account_heading">User Name</h1>
                    </section>
                    <section className="address_preview">
                        <h5 className="account_email">User Email Address</h5>
                        <br/>
                        <h5 className="address_name">Address Name</h5>
                        <p className="address_line">Address Line</p>
                        <p className="address_line">City, State/Region, Zip/Postal</p>
                        <br/>
                        <br/>
                        <h5 className="account_link"><Link to="/account/addresses">View Addresses</Link></h5>
                    </section>
                </article>
            </main> 
        )
    }
}

export default Account;