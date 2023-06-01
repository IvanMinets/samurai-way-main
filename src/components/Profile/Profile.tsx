import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes} from "../../redux/store";


type ProfilePropsType = {
    posts: {id: number, message: string , likesCount: number}[]
    message: string
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.hello}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                message={props.message}
                dispatch={props.dispatch} />
        </div>
    )
}
export default Profile;
