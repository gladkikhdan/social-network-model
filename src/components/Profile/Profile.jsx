import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import css from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={css.wrapper}>
            <ProfileInfo />
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;