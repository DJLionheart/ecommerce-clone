import React, { Component } from 'react';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            showEmailWarning: false,
            name: '',
            email: '',
            phone: '',
            imageName: '',
            msgText: ''
        }
    }

    updateForm(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        const { showEmailWarning, name, email, phone, imageName, msgText } = this.state;

        return(
            <main>
                <h1>Contact Us</h1>
                {
                    showEmailWarning ? <ul className="contact_warning"><li>Email is invalid.</li></ul> : <p></p>
                }
                <form>
                   <input type="text" onChange={ (evt) => this.updateForm(evt) }name="name" value={ name }/> 
                   <input type="text" onChange={ (evt) => this.updateForm(evt) }name="email" value={ email }/> 
                   <input type="text" onChange={ (evt) => this.updateForm(evt) }name="phone" value={ phone }/> 
                   <input type="text" onChange={ (evt) => this.updateForm(evt) }name="imageName" value={ imageName }/> 
                   <input type="text" onChange={ (evt) => this.updateForm(evt) }name="msgText" value={ msgText }/> 
                </form>
            </main>
        )
    }
}

export default Contact;