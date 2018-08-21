import React, { Component } from 'react';
import Button from '../../buttons/Button/Button';
import BeneathForm from '../BeneathForm/BeneathForm';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            pass: ''
        }

        this.handleUpdate = this.handleUpdate.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleUpdate(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    submitForm() {

    }

    render() {
        return(
            <main className="create_account">
                <h1>Create an Account</h1>
                <form onSubmit={ this.submitForm }>
                    <input name="firstName" type="text" onChange={ e => this.handleUpdate(e) }/>
                    <input name="lastName" type="text" onChange={ e => this.handleUpdate(e) }/>
                    <input name="email" type="email" onChange={ e => this.handleUpdate(e) }/>
                    <input name="pass" type="password" onChange={ e => this.handleUpdate(e) }/>
                    <Button variant="framed" type="submit">Register</Button>
                </form>
                <BeneathForm/>
            </main>
        )
    }
}

export default Register;