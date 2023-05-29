import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageAC, StoreType, updateNewMessageBodyAC} from "../../redux/state";


type DialogsPropsType = {
    store: StoreType
}

const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.store._state.dialogsPage.dialogs.map((dialog)=> <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.store._state.dialogsPage.messages.map((message)=><Message message={message.message}/>);
    let newMessageBody = props.store._state.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        let body = e.currentTarget.value;
        props.store.dispatch(updateNewMessageBodyAC(body))
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
