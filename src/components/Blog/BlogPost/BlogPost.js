import React from 'react';
import { Link } from 'react-router-dom';

import JournalBtn from '../../buttons/JournalBtn/JournalBtn';
import placeholder from '../../../assets/media/image_placeholder.png';

export default function BlogPost(props) {
    const { post } = props;
    return(
        <article>
            <Link to="/blogs/journal"><JournalBtn>Back to Journal</JournalBtn></Link>
            <h1>{ post.title }</h1>
            <br/>
            <img src={placeholder} alt={post.img.alt}/>
            <h5>{post.date}</h5>
            <br/>
            <h3>{post.subtitle}</h3>
            <br/>
            <p>{post.fullText}</p>
            <br/>
        </article>
    )
}