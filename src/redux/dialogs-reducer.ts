import React from "react";

export type SendMessageType = ReturnType<typeof sendMessageAC>
export type UpdateNewMessageType = ReturnType<typeof updateNewMessageBodyAC>

type ActionsTypes = SendMessageType | UpdateNewMessageType;

export const dialogsReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body})
            break;
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            break;
    }
    return state
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

export default dialogsReducer;