import axios from 'axios';
import React from 'react';
import css from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';


class Users extends React.Component {
    componentDidMount() {
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.page}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChange = pageId => {
        this.props.setCurrentPage(pageId);
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageId}&count=${this.props.page}`)
        .then(response => {
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
        
        let pages = [];
        for (let i = 1; i <= this.props.pages; i++) {
            pages.push(i);
        }



        return (
            <div className={css.wrapper}>
                <div className={css.pages}>
                    {pages.map(page => {
                        return <span className={page === this.props.currentPage && css.currentPage} 
                        key={page} 
                        onClick={() => {
                            this.onPageChange(page);
                        }}>{page}</span>
                    })}
                </div>
                {users}
            </div>
        );
    }
}

export default Users;