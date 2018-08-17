import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return(
            <button className={this.props.variant === 'framed' ? 'button framed' : 'button' }>
                {this.props.type === "add" ? "Add to cart" : this.props.type === "collection" ? "View collection" : this.props.type === "learn" ? "Learn more" : "View all"}
                <svg className="icon arrow_icon" viewBox="0 0 22.3 13.7">
                    <path d="M15.6 0l-.7.7 5.5 5.7H0v1h20.4L14.9 13l.7.7 6.7-6.8z">
                    </path>
                </svg>
            </button>
        )
    }
}

Button.propTypes = {
    variant: PropTypes.string,
    type: PropTypes.string,
}

Button.defaultProps = {
    variant: 'button',
    type: 'learn'
}

export default Button;

