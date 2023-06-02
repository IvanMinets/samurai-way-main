import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {

}

const MyPostsContainer = (props: MyPostsPropsType) => {

    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostAC());
    }
    const onPostChange = (text: string) => {
        let action = updateNewPostTextAC(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}
export default MyPostsContainer;
