import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

// type MyPostsPropsType = {
//
// }

const MyPostsContainer = (props: any) => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();
                const addPost = () => {
                    store.dispatch(addPostAC());
                }
                const onPostChange = (text: string) => {
                    let action = updateNewPostTextAC(text);
                    store.dispatch(action);
                }
                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                />
            }}
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;
