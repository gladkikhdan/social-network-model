import axios from 'axios';
import React from 'react';
import css from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';


class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        let users = this.props.users.map(user => (
            <div key={user.id} className={css.user}>
                <div className={css.follow}>
                    {
                        user.followed
                            ? <button onClick={() => { this.props.unFollow(user.id); }}>UNFOLLOW</button>
                            : <button onClick={() => { this.props.follow(user.id); }}>FOLLOW</button>
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
                {users}
            </div>
        );
    }
}

export default Users;