import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    let postData = props.state.postData;
    let newPostText = props.state.newPostText;
    

    return (
        <div className={css.wrapper}>
            <ProfileInfo />
            <MyPosts posts={postData} newPostText={newPostText} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;