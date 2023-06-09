import {usersAPI} from "../api/api";

type PostType = {
    id: number
    message: string
    likesCount: number
}
export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>
export type SetUserProfileType = ReturnType<typeof setUserProfileAC>

type ActionsTypes = AddPostActionType | UpdateNewPostTextType | SetUserProfileType;

let initState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It is my first post", likesCount: 11},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
}

const profileReducer = (state: any = initState, action: ActionsTypes) =>  {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            };
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
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
export const setUserProfileAC = (profile: any) => {
    return {
        type: 'SET_USER_PROFILE',
        profile: profile
    } as const
}

export const getUserProfile = (userId: any) => (dispatch: any) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data));
        })
}

export default profileReducer;