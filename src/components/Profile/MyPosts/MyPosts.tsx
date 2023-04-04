import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={a.posts}>
                <Post message={"Hi, how are you?"} likesCount={0}/>
                <Post message={"It is my first post"} likesCount={23}/>
            </div>
        </div>
    )
}
export default MyPosts;
