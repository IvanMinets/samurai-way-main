import React from "react";
type PostType = {
    id: number
    message: string
    likesCount: number
}
export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>

type ActionsTypes = AddPostActionType | UpdateNewPostTextType;

let initState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It is my first post", likesCount: 11},
    ],
    newPostText: 'it-kamasutra.com1'
}

const profileReducer = (state: any = initState, action: any) =>  {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            break;
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

export default profileReducer;