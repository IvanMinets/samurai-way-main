import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, updateNewPostTextAC} from "../../../redux/state";

type MyPostsPropsType = {
    posts: {id: number, message: string, likesCount: number}[]
    message: string
    dispatch: (action: ActionsTypes) => void
}



const MyPosts = (props: MyPostsPropsType) => {

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
        <div className={a.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.message}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={a.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;
