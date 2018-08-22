import React, { Component } from 'react';
import AddressModal from '../Addresses/AddressModal/AddressModal';

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
                <h1>Account</h1>
            </main>
        )
    }
}

export default Account;