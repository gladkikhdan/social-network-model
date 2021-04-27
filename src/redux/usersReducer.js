const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let initialState = {
    users: [],
    page: 40,
    totalCount: 15,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                })
            };

        case SET_USERS:
            return { ...state, users: [...action.users] };
        
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };

        default:
            return state;
    };
}

export const followCreator = (id) => ({ type: FOLLOW, userId: id });
export const unFollowCreator = (id) => ({ type: UNFOLLOW, userId: id });
export const setUsersCreator = (users) => ({ type: SET_USERS, users: users });
export const setCurrentPageCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})

export default usersReducer;