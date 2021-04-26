import axios from 'axios';
import React from 'react';
import css from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';


let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger;
                props.setUsers(response.data.items);
            });
        }
    }

    let users = props.users.map(user => (
        <div key={user.id} className={css.user}>
            <div className={css.follow}>
                {
                    user.followed
                        ? <button onClick={() => { props.unFollow(user.id); }}>UNFOLLOW</button>
                        : <button onClick={() => { props.follow(user.id); }}>FOLLOW</button>
                }
            </div>
            <div className={css.avatar}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} />
            </div>
            <div className={css.description}>
                description, name: {user.name}
            </div>
        </div>));

    return (
        <div className={css.wrapper}>
            <div>
                <button onClick={getUsers}>Get Users</button>
            </div>
            {users}
        </div>
    );
}

export default Users;