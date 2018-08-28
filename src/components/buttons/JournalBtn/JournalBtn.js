import React, { Component } from 'react';

class JournalBtn extends Component {
    render() {
        return(
            <button>
                { this.props.children }
            </button>
        )
    }
}

export default JournalBtn;