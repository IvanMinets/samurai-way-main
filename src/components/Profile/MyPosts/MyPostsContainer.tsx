import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = (props: any) => {
//
//     return (
//         <StoreContext.Consumer>{
//             (store: any) => {
//                 let state = store.getState();
//                 const addPost = () => {
//                     store.dispatch(addPostAC());
//                 }
//                 const onPostChange = (text: string) => {
//                     let action = updateNewPostTextAC(text);
//                     store.dispatch(action);
//                 }
//                 return <MyPosts
//                     updateNewPostText={onPostChange}
//                     addPost={addPost}
//                     posts={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText}
//                 />
//             }}
//         </StoreContext.Consumer>
//     )
// }
let mapStateToProps = (state: any)=>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: any) =>{
    return {
        addPost: (newPostText: string)=>{dispatch(addPostAC(newPostText))}
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
