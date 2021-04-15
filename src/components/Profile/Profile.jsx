import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css'

const Profile = () => {
    return (
    <div className={css.content}>
        <div className={css.img}>
            <img src='http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg' width='550px' height='350px'/>
        </div>

        <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwnCanQ7dgSfYKymyi1b0rx23l1YeoDacjw&usqp=CAU' />
        </div>
        <MyPosts />     
    </div>    
    );
}

export default Profile;