import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={a.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={a.posts}>
                <Post message={"Hi, how are you?"} likesCount={0}/>
                <Post message={"It is my first post"} likesCount={23}/>
            </div>
        </div>
    )
}
export default MyPosts;
