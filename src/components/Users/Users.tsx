import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";


type UsersPropsType = {
    users: Array<any>
    totalUsersCount: any
    pageSize: any
    currentPage: any
    onPageChanged: any
    followingInProgress: Array<any>
    toggleFollowingInProgress: any
    follow: any,
    unfollow: any
}

const Users = (props: UsersPropsType) => {
    return (
        <div>
            <div>
               <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} pageSize={props.pageSize} totalItemsCount={props.totalUsersCount}/>
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
                                }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => {
                                    props.follow(u.id)
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