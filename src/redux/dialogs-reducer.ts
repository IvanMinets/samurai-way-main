import React from "react";
type PostType = {
    id: number
    message: string
    likesCount: number
}
type SendMessageType = ReturnType<typeof sendMessageAC>
type UpdateNewMessageType = ReturnType<typeof updateNewMessageBodyAC>

type ActionsTypes = SendMessageType | UpdateNewMessageType;

const dialogsReducer = (state: any, action: ActionsTypes) =>  {
    if (action.type === 'ADD-POST') {
        let newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
    }
    else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
        this._state.dialogsPage.newMessageBody = action.body;
        this._callSubscriber(this._state);
    }
    else if (action.type === 'SEND-MESSAGE') {
        let body = this._state.dialogsPage.newMessageBody;
        this._state.dialogsPage.newMessageBody = '';
        this._state.dialogsPage.messages.push({id: 6, message: body})
        this._callSubscriber(this._state);
    }
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}