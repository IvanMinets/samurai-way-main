import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";


type MyPostsPropsType = {
    posts: { id: number, message: string, likesCount: number }[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        props.addPost();
        if (newPostElement.current) {
            newPostElement.current.value = '';
        }
    }
    const onPostChange = () => {
        let text = newPostElement.current ? newPostElement.current.value : "";
        props.updateNewPostText(text);
    }


    return (
        <div className={a.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={a.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;
