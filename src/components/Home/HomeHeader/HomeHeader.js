import React, { Component } from 'react';

import './HomeHeader.css';

class HomeHeader extends Component {
    constructor() {
        super();
        this.state = {
            spotlight_visible: false
        }
    }

    render() {
        return(
            <section className="home_header">
                <button className="home_more">
                <svg aria-hidden="true" className="more_icon" viewBox="0 0 18 16">
                    <path d="M17 2h-1V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 3v10H1V1h14v1H3a1 1 0 0 0-1 1zm13 2.5A1.5 1.5 0 1 1 13.5 4 1.5 1.5 0 0 1 15 5.5zm1 8.5H4v-2l3.5-6 4 5h1L16 8z"></path>
                </svg>
                </button>
            </section>
        )
    }
}

export default HomeHeader;