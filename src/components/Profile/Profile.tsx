import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    profile: any,
    status: any,
    updateStatus: any
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.hello}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;
