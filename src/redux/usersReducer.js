const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id == action.userId) {
                        return { ...user, isFollowed: true };
                    }
                    return user;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id == action.userId) {
                        return { ...user, isFollowed: false };
                    }
                    return user;
                })
            };

        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] };

        default:
            return state;
    };
}

export const followCreator = (id) => ({ type: FOLLOW, userId: id });
export const unFollowCreator = (id) => ({ type: UNFOLLOW, userId: id });
export const setUsersCreator = (users) => ({ type: SET_USERS, users: users });

export default usersReducer;