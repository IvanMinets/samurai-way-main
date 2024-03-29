export type SendMessageType = ReturnType<typeof sendMessageAC>
export type UpdateNewMessageType = ReturnType<typeof updateNewMessageBodyAC>

type ActionsTypes = SendMessageType | UpdateNewMessageType;

let initState = {
    dialogs: [
        {id: 1, name: "Ivan"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"}
    ]
}

export const dialogsReducer = (state: any = initState, action: ActionsTypes) => {
    let stateCopy;
    switch (action.type) {
        case 'SEND-MESSAGE':
            let body = action.newMessageBody;
            stateCopy = {
                ...state,
                messages: [...state.messages,{id:6, message: body}]
            };
            return stateCopy;
        case 'UPDATE-NEW-MESSAGE-BODY':
            stateCopy = {
                ...state,
                newMessageBody: action.body
            };
            return stateCopy;
        default:
            return state
    }
}


export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: 'SEND-MESSAGE',
        newMessageBody: newMessageBody
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}

export default dialogsReducer;