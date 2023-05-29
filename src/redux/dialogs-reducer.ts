import React from "react";

type SendMessageType = ReturnType<typeof sendMessageAC>
type UpdateNewMessageType = ReturnType<typeof updateNewMessageBodyAC>

type ActionsTypes = SendMessageType | UpdateNewMessageType;

const dialogsReducer = (state: any, action: ActionsTypes) => {
    if (action.type === 'SEND-MESSAGE') {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({id: 6, message: body})
    }
    else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
        state.newMessageBody = action.body;
    }
}


export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}