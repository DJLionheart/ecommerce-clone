import React, { Component } from 'react';
import Button from '../../buttons/Button/Button';
import BeneathForm from '../BeneathForm/BeneathForm';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            pass: '',
            forgotten: false,
            recoveryEmail: ''
        }

        this.handleUpdate = this.handleUpdate.bind(this);
        this.login = this.login.bind(this);
    }

    handleUpdate(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    login() {

    }

    render() {
        return(
            <main className="create_account">
                <h1>Create an Account</h1>
                <form onSubmit={ this.login }>
                    <input name="email" type="email" onChange={ e => this.handleUpdate(e) }/>
                    <input name="pass" type="password" onChange={ e => this.handleUpdate(e) }/>
                    <Button variant="framed" type="submit">Sign in</Button>
                </form>
                <BeneathForm create/>
            </main>
        )
    }
}

export default Login;