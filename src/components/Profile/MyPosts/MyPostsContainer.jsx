import React from 'react';
import { addPostCreator, textChangeCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let posts = props.store.getState().profilePage.postData;

    function addPost() {
        props.store.dispatch(addPostCreator());
    }

    function onPostTextChange(text) {
        props.store.dispatch(textChangeCreator(text));
    }

    return (
        <MyPosts 
        posts={posts}
        newPostText={props.store.getState().profilePage.newPostText}
        updateTextChange={onPostTextChange}
        addPost={addPost} />
    );
}

export default MyPostsContainer;