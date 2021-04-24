import React from 'react';
import css from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        debugger;
        props.setUsers([
            {
                id: 1,
                avatarUrl: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
                isFollowed: false,
                name: 'Sam',
                status: 'Listening drake RN',
                location: {
                    city: 'Minsk', country: 'Belarus',
                },
            },
            {
                id: 2,
                avatarUrl: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
                isFollowed: false,
                name: 'Alex',
                status: 'I love cheesecake',
                location: {
                    city: 'Moscow', country: 'Russia',
                }
            },
            {
                id: 3,
                avatarUrl: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
                isFollowed: true,
                name: 'Elena',
                status: 'Learning javascript',
                location: {
                    city: 'Saint P', country: 'Russia',
                }
            },
            {
                id: 4,
                avatarUrl: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
                isFollowed: false,
                name: 'Richard',
                status: 'smoking loud',
                location: {
                    city: 'Atlanta', country: 'USA',
                }
            },
            {
                id: 5,
                avatarUrl: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
                isFollowed: true,
                name: 'Grinch',
                status: 'Hating Santa!',
                location: {
                    city: 'Middle of nowhere', country: 'North pole',
                }
            },
        ]);
    }

    let users = props.users.map(user => (
        <div key={user.id} className={css.user}>
            <div className={css.follow}>
                {
                    user.isFollowed
                        ? <button onClick={() => { props.unFollow(user.id); }}>UNFOLLOW</button>
                        : <button onClick={() => { props.follow(user.id); }}>FOLLOW</button>
                }
            </div>
            <div className={css.avatar}>
                <img src={user.avatarUrl} />
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

export default Users;