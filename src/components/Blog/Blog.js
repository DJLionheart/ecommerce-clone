import React, { Component } from 'react';

class Blog extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    render() {
        return(
            <main>
                <h1>Journal</h1>
            </main>
        )
    }
}

export default Blog;