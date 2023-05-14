import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


type DialogsPropsType = {
    dialogs: {id: number, name: string}[]
    messages: {id: number, message: string}[]
}
type DialogItemProps = {
    id: number,
    name: string
}

type messageProps = {
    message: string;
}

const DialogItem = (props: DialogItemProps) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


const Message = (props: messageProps) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = () => {


    let dialogs = [
        {id: 1, name: "Ivan"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ]
    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"}
    ]

    let dialogsElements = dialogs.map((dialog)=> <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = messages.map((message)=><Message message={message.message}/>);

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
