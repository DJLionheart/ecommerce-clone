import React from 'react';
import { Link } from 'react-router-dom';

import placeholder from '../../../assets/media/image_placeholder.png';

function Result(props) {
    const { product } = props
    return(
        <Link to={product.path}>
            <div className="search_result">
                <img src={placeholder} alt="placeholder"/>
                <h5 className="result_heading">{ product }</h5>
            </div>
        </Link>
    )
}

export default Result;