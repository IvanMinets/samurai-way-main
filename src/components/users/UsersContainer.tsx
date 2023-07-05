import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC, getUsersThunkCreator,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC, toggleFollowingInProgressAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/users-reducer";
import axios from "axios";
import Preloader from "../common/preloader/preloader";
import {getUsers} from "../../api/api";

interface UsersPropsType {
    users: Array<any>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: any) => void
    setTotalUsersCount: (totalCount: any) => void
    toggleIsFetching: (isFetching: boolean) => void
    isFetching: boolean
    toggleFollowingInProgress: any
    followingInProgress: Array<any>
    getUsersThunkCreator: any
    totalUsersCount: any
    pageSize: any
    currentPage: any
}

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator();
        // this.props.toggleIsFetching(true)
        // getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     });
    }

    onPageChanged = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            });
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

let mapStateToProps = (state: any) =>  {
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
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage:setCurrentPageAC,
    setUsersTotalCount: setUsersTotalCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    toggleFollowingInProgress: toggleFollowingInProgressAC,
    getUsersThunkCreator: getUsersThunkCreator
})(UsersAPIComponent);