import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {ActionsTypes} from "../../../redux/store";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    posts: {id: number, message: string, likesCount: number}[]
    message: string
    dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map((post)=> <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {

        // props.addPost();
        // if (newPostElement.current) {
        //     newPostElement.current.value = '';
        // }
        props.dispatch(addPostAC());
    }
    const onPostChange = () => {
        let text = newPostElement.current ? newPostElement.current.value : "";
        // props.updateNewPostText(text);
        let action = updateNewPostTextAC(text);
        props.dispatch(action);
    }


    return (
        <MyPosts posts={} message={} dispatch={}/>
    )
}
export default MyPostsContainer;
