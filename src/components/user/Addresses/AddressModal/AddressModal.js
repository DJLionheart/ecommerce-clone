import React, { Component } from 'react';


class AddressModal extends Component {
    constructor() {
        super();
        this.state = {
            display: false,
            firstName: '',
            lastName: '',
            company: '',
            firstLine: '',
            secondLine: '',
            city: '',
            country: 'United States',
            stateSelector: true,
            stateProvince: 'Alabama',
            postalCode: '',
            phone: '',
            defaultAddress: false
        }

        this.add_address = this.add_address.bind(this);
        this.edit_address = this.edit_address.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    add_address() {

    }

    edit_address() {

    }

    handleUpdate(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        const { addAddress } = this.props;
        const { display, firstName, lastName, company, firstLine, secondLine, city, country, stateSelector, stateProvince, postalCode, phone, defaultAddress } = this.state;

        return(
            <modal className={ display ? "modal_visible address_modal" : "modal_hidden" }>
                {
                    addAddress ? <h1 className="address_modal_header">Add a New Address</h1> : <h1 className="address_modal_header">Edit Address</h1>
                }
                <form className="address_form" onSubmit={ addAddress ? this.add_address : this.edit_address }>
                    <input className="address_field" name="firstName" value={ firstName } type="text" onChange={}/>
                    <input className="address_field" name="lastName" value={ lastName } type="text"/>
                    <input className="address_field" name="company" value={ company } type="text"/>
                    <input className="address_field" name="firstLine" value={ firstLine } type="text"/>
                    <input className="address_field" name="secondLine" value={ secondLine } type="text"/>
                    <input className="address_field" name="city" value={ city } type="text"/>
                    <select className="address_country_select" name="country" value={ country }>

                    </select>
                </form>
            </modal>
        )
    }
}

export default AddressModal;