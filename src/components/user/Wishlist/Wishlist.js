import React, { Component } from 'react';
import Button from '../../buttons/Button/Button';

class Wishlist extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            wishlist: []
        }
    }

    render() {
        const { loaded, wishlist } = this.state;
        return(
            <main className="wishlist">
                <h1>Wishlist</h1>
                {
                    !loaded ? <p className="wishlist_dialog">Please wait while you are redirected...</p> : null
                }
                {
                    loaded && wishlist.length === 0 ? <span className="wishlist_create">
                            <p className="wishlist_dialog">You don't seem to have a wishlist with us. Would you like to open one?</p>
                            <Button variant="framed">Open Wishlist</Button>
                        </span> : null
                } 
            </main>
        )
    }
}

export default Wishlist;