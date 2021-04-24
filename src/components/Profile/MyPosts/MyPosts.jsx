import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let posts = props.posts.map(elem => <Post text={elem.post} key={elem.id} likes={elem.likesCount} />);
    let newPostElement = React.createRef();

    function addPost() {
        props.addPost();
    }

    function onPostTextChange() {
        let text = newPostElement.current.value;
        props.updateTextChange(text);
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
                        <button onClick={addPost}>Add post</button>
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