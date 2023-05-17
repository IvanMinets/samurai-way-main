import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type ProfilePropsType = {
    posts: {id: number, message: string , likesCount: number}[]
    addPost: (postMessage: string) => void
    message: string
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.hello}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} message={props.message}/>
        </div>
    )
}
export default Profile;
