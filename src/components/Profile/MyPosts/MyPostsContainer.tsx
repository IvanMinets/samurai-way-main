import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

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
        <StoreContext.Consumer>{
            (store)=><MyPosts
                updateNewPostText={onPostChange}
                addPost={addPost}
                posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}
            />}
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;
