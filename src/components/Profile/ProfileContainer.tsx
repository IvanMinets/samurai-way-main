import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {

}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.hello}>
            <ProfileInfo/>
            <MyPostsContainer  />
        </div>
    )
}
export default Profile;
