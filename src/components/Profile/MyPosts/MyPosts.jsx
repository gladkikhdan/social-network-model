import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={css.posts}>
                <Post message="Hey, how are you?" likes='15'/>
                <Post message="It's my first post on this website!" likes='22'/>
            </div>       
        </div>
    );
}

export default MyPosts;