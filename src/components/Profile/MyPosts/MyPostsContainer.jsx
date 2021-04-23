import React from 'react';
import { connect } from 'react-redux';
import { addPostCreator, textChangeCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


const mapStateToProps = state => ({
    posts: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
})

const mapDispatchToProps = dispatch => ({
    updateTextChange: (text) => {
        dispatch(textChangeCreator(text));
    },
    addPost: () => {
        dispatch(addPostCreator());
    },
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;