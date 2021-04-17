import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, post: "Hey, how are you?", likesCount: 15},
        {id: 2, post: "It's my first post on this website!", likesCount: 22}
    ];

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
                <Post message={postData[0].post} likes={postData[0].likesCount} />
                <Post message={postData[1].post} likes={postData[1].likesCount} />
            </div>
        </div>
    );
}

export default MyPosts;