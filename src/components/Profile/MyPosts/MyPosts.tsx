import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It is my first post", likesCount: 11},
    ]

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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    )
}
export default MyPosts;
