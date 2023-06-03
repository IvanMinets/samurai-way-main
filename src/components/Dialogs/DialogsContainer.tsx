import React, {ChangeEvent} from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


// type DialogsPropsType = {
//     store: StoreType
// }

const DialogsContainer = (props: any) => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().dialogsPage;

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageAC())
                }

                const onNewMessageChange = (body: any) => {
                   store.dispatch(updateNewMessageBodyAC(body))
                }
                return <Dialogs
                    sendMessage={onSendMessageClick}
                    updateNewMessageBody={onNewMessageChange}
                    store={store}
                    dialogsPage={state}
                />
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;
