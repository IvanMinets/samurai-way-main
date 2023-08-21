import {profileAPI, usersAPI} from "../api/api";

type PostType = {
    id: number
    message: string
    likesCount: number
}
export type AddPostActionType = ReturnType<typeof addPostAC>
export type SetUserProfileType = ReturnType<typeof setUserProfileAC>
export type SetStatusType = ReturnType<typeof setStatusAC>

type ActionsTypes = AddPostActionType | SetUserProfileType | SetStatusType;

let initState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It is my first post", likesCount: 11},
    ],
    profile: null
}

const profileReducer = (state: any = initState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            };
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
    }
    return state;
}

export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}
export const setUserProfileAC = (profile: any) => {
    return {
        type: 'SET_USER_PROFILE',
        profile: profile
    } as const
}
export const setStatusAC = (status: any) => {
    return {
        type: 'SET_STATUS',
        status: status
    } as const
}


export const getUserProfileTC = (userId: any) => (dispatch: any) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data));
        })
}

export const getStatusTC = (id: any) => (dispatch: any) => {
    profileAPI.getStatus(id)
        .then(response => {
            dispatch(setStatusAC(response.data));
        })
}
export const updateStatusTC = (status: any) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status));
            }
        })
}


export default profileReducer;