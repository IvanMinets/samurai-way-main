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
            <div className={a.posts}></div>
            {/*<Post message = 'Hi'/>*/}
            {/*<Post message = 'Hi again'/>*/}
        </div>
    )
}
export default MyPosts;
