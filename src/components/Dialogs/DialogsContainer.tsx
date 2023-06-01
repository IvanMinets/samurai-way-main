import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (body:any) =>{
        props.store.dispatch(updateNewMessageBodyAC(body))
    }
    return (
        <Dialogs
            sendMessage = {onSendMessageClick}
            updateNewMessageBody={onNewMessageChange}
            store={props.store}
            dialogsPage={state}
        />
    )
}

export default DialogsContainer;
