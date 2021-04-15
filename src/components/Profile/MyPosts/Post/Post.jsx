import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    return (
        <div className={css.item}>
            <img src="https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg" />
            {props.message}
            <div>
                <span>{props.likes} Likes</span>
            </div>
        </div>
    );
}

export default Post;