import React, { Component } from 'react';


class Account extends Component {
    constructor() {
        super();
        this.state = {
            admin: false,
            orders: [],
            address: []
        }
    }
}

export default Account;