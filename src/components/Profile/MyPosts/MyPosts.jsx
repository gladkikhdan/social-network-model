import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let posts = props.posts.map(element => <Post text={element.post} likes={element.likesCount} />);
    let newPostElement = React.createRef();

    function createPost() {
        props.addPost(props.newPostText);
    }

    function onPostTextChange() {
        let text= newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={css.wrap}>
            <h4>My Posts</h4>
            <div className={css.new_post}>
                <div>
                    <div>
                        <textarea ref={newPostElement} onChange={onPostTextChange} value={props.newPostText}></textarea>
                    </div>
                    <div>
                        <button onClick={createPost}>Add post</button>
                    </div>
                </div>
            </div>

            <div className={css.posts}>
                {posts}
            </div>
        </div>
    );
}

export default MyPosts;