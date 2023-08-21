import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


type MyPostsPropsType = {
    posts: { id: number, message: string, likesCount: number }[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: (values: any) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = (values: any) => {
        props.addPost(values.newPostText);
    }
    const onPostChange = () => {
        let text = newPostElement.current ? newPostElement.current.value : "";
        props.updateNewPostText(text);
    }


    return (
        <div className={a.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmuit={onAddPost}/>
            <div className={a.posts}>
                {postsElements}
            </div>
        </div>
    )
}

function AddNewPostForm (props: any) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <textarea onChange={props.onPostChange} ref={props.newPostElement} value={props.newPostText}/>
            <Field name={"newPostText"}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}
const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;
