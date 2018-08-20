import React from 'react';
import { Link } from 'react-router-dom';

function BeneathForm(props) {
    return(
        <div className="beneath_form">
            {
                props.create ? <h3 className="create_link"><Link to="/account/register">Create an Account</Link></h3> : null
            }
            <Link to="/store"><h4>Back to Store</h4></Link>
        </div>
    )
}

export default BeneathForm;