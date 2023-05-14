import React from 'react';
import s from "./../Dialogs.module.css";

type messageProps = {
    message: string;
}

const Message = (props: messageProps) => {
    return <div className={s.dialog}>{props.message}</div>
}
export default Message;
