import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {followUser, unfollowUser} from "../../api/api";
import {followThunkCreator, unfollowThunkCreator} from "../../redux/users-reducer";

type UsersPropsType = {
    users: Array<any>
    totalUsersCount: any
    pageSize: any
    currentPage: any
    onPageChanged: any
    follow: any
    unfollow: any
    followingInProgress: Array<any>
    toggleFollowingInProgress: any
}

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => {
                        props.onPageChanged(p);
                    }} className={props.currentPage === p ? s.selectedPage : ""}>{p}</span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="#"
                                 className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => {
                                    props.unfollow(u.id)
                                    // unfollowThunkCreator(u.id)
                                    // props.toggleFollowingInProgress(true, u.id);
                                    // unfollowUser(u.id)
                                    //     .then(data => {
                                    //         if (data.resultCode === 0) {
                                    //             props.unfollow(u.id);
                                    //         }
                                    //         props.toggleFollowingInProgress(false, u.id);
                                    //     });
                                }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => {
                                    props.follow(u.id)
                                    // followThunkCreator(u.id)
                                    // props.toggleFollowingInProgress(true, u.id);
                                    // followUser(u.id)
                                    //     .then(data => {
                                    //         if (data.resultCode === 0) {
                                    //             props.follow(u.id);
                                    //         }
                                    //         props.toggleFollowingInProgress(false, u.id);
                                    //     });
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
        ;
}
export default Users;