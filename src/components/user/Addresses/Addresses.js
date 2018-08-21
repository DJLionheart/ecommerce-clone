import React, { Component } from 'react';
import { Link } from 'react-router-dom';


/*
    Edit address brings up a modal to update the details

    Delete address brings up an alert: 'Are you sure you wish to delete this address?'

    After either action is conducted, the page refreshes to load the new info.
*/

class Addresses extends Component {
    constructor() {
        super();
        this.state = {
            defaultAddress: {},
            addresses: [],
            addAddress: false,
            editAddress: false
        }
    }

    render() {
        const { defaultAddress, addresses } = this.state;
        
        const addressList = addresses.map( (address, i) => {
            return(
                <section key={ i } className="user_address">
                    <h4 className="address_header">{ address.firstLine } { address.default ? "(Default)" : null }</h4>
                    <h5 className="address_controls"><Link to="">Edit</Link> / Delete</h5>
                </section>
            )
        })

        return(
            <main className="addresses_page">
                <span className="side_link">
                    <h4 className="back_btn">Back to Account</h4>
                </span>
                <span className="addresses_header">
                    <h1>Account Addresses</h1>
                    <h5 className="add_address">+ Add a New Address</h5>
                </span>

                <hr id="addresses_divider"/>

                { addressList }

            </main>
        )
    }
}

export default Addresses;