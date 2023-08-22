import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";


type MyPostsPropsType = {
    posts: { id: number, message: string, likesCount: number }[]
    newPostText: string
    addPost: (values: any) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = (values: any) => {
        props.addPost(values.newPostText);
    }


    return (
        <div className={a.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={a.posts}>
                {postsElements}
            </div>
        </div>
    )
}
let maxLengthCreator = ()

export const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={"textarea"} validate={[required, maxLengthCreator(10 )]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;
