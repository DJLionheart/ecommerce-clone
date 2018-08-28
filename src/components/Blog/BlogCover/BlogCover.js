import React from 'react';
import { Link } from 'react-router-dom';

import placeholder from '../../../assets/media/image_placeholder.png';

export default function BlogCover(props) {
    const { post } = props;
    return(
        <article>
            <Link to={post.path}><img src={placeholder} alt={post.img.alt}/></Link>
            <h5>{post.date}</h5>
            <br/>
            <Link to={post.path}><h3>{post.title}</h3></Link>
            <br/>
            <p>{post.summary}</p>
            <br/>
            <Link to={post.path}><h5>Read More</h5></Link>
        </article>
    )
}