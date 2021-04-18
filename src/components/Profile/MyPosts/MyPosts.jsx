import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let posts = props.posts.map( element => <Post text={element.post} likes={element.likesCount} /> );

    return (
        <div className={css.wrap}>
            <h4>My Posts</h4>
            <div className={css.new_post}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={css.posts}>                
                {posts}
            </div>
        </div>
    );
}

export default MyPosts;