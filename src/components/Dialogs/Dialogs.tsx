import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";


type DialogsPropsType = {
    store: StoreType
    updateNewMessageBody: (body:any) => void
    sendMessage: ()=>void
    dialogsPage: any
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((dialog: any)=> <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messages.map((message: any)=><Message message={message.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
