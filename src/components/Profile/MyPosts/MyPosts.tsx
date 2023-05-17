import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";

type MyPostsPropsType = {
    posts: {id: number, message: string, likesCount: number}[]
    addPost: (postMessage: string) => void
    message: string
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map((post)=> <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        let text = newPostElement.current ? newPostElement.current.value : "";
        props.addPost(text);
        if (newPostElement.current) {
            newPostElement.current.value = '';
        }
    }
    const onPostChange = () => {

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
