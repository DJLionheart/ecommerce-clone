import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

import Button from '../../../buttons/Button/Button';

import './AddressModal.css';

class AddressModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            firstName: '',
            lastName: '',
            company: '',
            firstLine: '',
            secondLine: '',
            city: '',
            country: 'United States',
            stateSelector: true,
            region: 'Alabama',
            postalCode: '',
            phone: '',
            defaultAddress: false
        }

        this.add_address = this.add_address.bind(this);
        this.edit_address = this.edit_address.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
        this.selectRegion = this.selectRegion.bind(this);
    }

    add_address() {

    }

    edit_address() {

    }

    handleUpdate(evt) {
        if(evt.target.name === 'defaultAddress') {
            const { defaultAddress } = this.state
            this.setState({
                defaultAddress: !defaultAddress
            })
        } else {
            this.setState({
                [evt.target.name]: evt.target.value
            })
        }
    }

    selectCountry(val) {
        this.setState({
            country: val
        })
    }

    selectRegion(val) {
        this.setState({
            region: val
        })
    }

    render() {
        const { addAddress } = this.props;
        console.log(this.props)
        const { display, firstName, lastName, company, firstLine, secondLine, city, country, stateSelector, region, postalCode, phone, defaultAddress } = this.state;

        return(
            <aside className={ display ? "address_modal" : "modal_hidden" }>
                {
                    addAddress ? <h1 className="address_modal_header">Add a New Address</h1> : <h1 className="address_modal_header">Edit Address</h1>
                }
                <form className="address_form" onSubmit={ addAddress ? this.add_address : this.edit_address }>
                    <input className="address_field" placeholder="FIRST NAME" name="firstName" value={ firstName } type="text" onChange={ e => this.handleUpdate(e) }/>
                    <input className="address_field" placeholder="LAST NAME" name="lastName" value={ lastName } type="text" onChange={ e => this.handleUpdate(e) }/>
                    <input className="address_field" placeholder="COMPANY" name="company" value={ company } type="text" onChange={ e => this.handleUpdate(e) }/>
                    <input className="address_field" placeholder="ADDRESS1" name="firstLine" value={ firstLine } type="text" onChange={ e => this.handleUpdate(e) }/>
                    <input className="address_field" placeholder="ADDRESS2" name="secondLine" value={ secondLine } type="text" onChange={ e => this.handleUpdate(e) }/>
                    <input className="address_field" placeholder="CITY" name="city" value={ city } type="text" onChange={ e => this.handleUpdate(e) }/>
                    <CountryDropdown id="address_country_select" value={ country } onChange={ this.selectCountry }/>
                    <RegionDropdown id="address_region_select" disabledWhenEmpty={ true } country={ country } value={ region } onChange={ this.selectRegion }/>
                    <input className="address_field" name="postalCode" value={ postalCode } type="text" onChange={ e => this.handleUpdate(e) }/>
                    <input className="address_field" name="phone" value={ phone } type="text" onChange={ e => this.handleUpdate(e) }/>
                    <span className="default_address">
                        <input className="address_checkbox" name="defaultAddress" value={ defaultAddress } type="checkbox" onChange={ e => this.handleUpdate(e) }/>
                    </span>
                    <Button type="submit">{ addAddress ? 'Add Address' : 'Edit Address'}</Button>
                </form>
            </aside>
        )
    }
}

export default AddressModal;