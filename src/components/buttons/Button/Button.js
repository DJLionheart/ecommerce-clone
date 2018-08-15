import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const children = this.props.children;
        return(
            <button className={this.props.variant === 'framed' ? 'button framed' : 'button' }>
                {children}
                <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-arrow" viewBox="0 0 22.3 13.7">
                    <path d="M15.6 0l-.7.7 5.5 5.7H0v1h20.4L14.9 13l.7.7 6.7-6.8z">
                    </path>
                </svg>
            </button>
        )
    }
}

Button.propTypes = {
    children: PropTypes.element.isRequired,
    text: PropTypes.string,
    variant: PropTypes.string
}

Button.defaultProps = {
    variant: 'regular'
}

export default Button;

