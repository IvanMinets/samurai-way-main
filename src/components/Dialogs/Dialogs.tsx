import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


type DialogsPropsType = {
    dialogs: {id: number, name: string}[]
    messages: {id: number, message: string}[]
}

const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogs.map((dialog)=> <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messages.map((message)=><Message message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
