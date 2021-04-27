import { connect } from "react-redux";
import { followCreator, setUsersCreator, unFollowCreator, 
    setCurrentPageCreator, setTotalUsersCount } from "../../redux/usersReducer";
import Users from './Users';

let mapStateToProps = state => ({
    users: state.usersPage.users,   
    page: state.usersPage.page,
    totalCount: state.usersPage.totalCount,
    pages: Math.ceil(state.usersPage.totalCount / state.usersPage.page),
    currentPage: state.usersPage.currentPage
})


let mapDispatchToProps = dispatch => ({
    follow: userId => {
        dispatch(followCreator(userId));
    },
    unFollow: userId => {
        dispatch(unFollowCreator(userId));
    },
    setUsers: users => {
        dispatch(setUsersCreator(users));
    },
    setTotalUsersCount: totalCount => {
        dispatch(setTotalUsersCount(totalCount));
    },
    setCurrentPage: pageId => {
        dispatch(setCurrentPageCreator(pageId));
    }
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;