import React from 'react';
import {connect} from "react-redux";
import Users from './Users';
import {
   followThunkCreator, getUsersThunkCreator,
    setCurrentPageAC,
    toggleFollowingInProgressAC,
    unfollowThunkCreator
} from "../../redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";


interface UsersPropsType {
    users: Array<any>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: any) => void
    isFetching: boolean
    toggleFollowingInProgress: any
    followingInProgress: Array<any>
    getUsers: any
    totalUsersCount: any
    pageSize: any
    currentPage: any
}

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        toggleFollowingInProgress: state.usersPage.toggleFollowingInProgress
    }
}


export default connect(mapStateToProps, {
    setCurrentPage: setCurrentPageAC,
    toggleFollowingInProgress: toggleFollowingInProgressAC,
    getUsers: getUsersThunkCreator,
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator
})(UsersAPIComponent);