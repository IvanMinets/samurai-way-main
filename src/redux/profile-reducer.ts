import React from "react";
type PostType = {
    id: number
    message: string
    likesCount: number
}
type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>

type ActionsTypes = AddPostActionType | UpdateNewPostTextType;

const profileReducer = (state: any, action: ActionsTypes) =>  {
    if (action.type === 'ADD-POST') {
        let newPost: PostType = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };
        state.posts.push(newPost);
        state.newPostText = '';
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText;
    }
    return state;
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}