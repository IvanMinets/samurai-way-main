import React, {ChangeEvent} from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props: any) => {
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState().dialogsPage;
//
//                 const onSendMessageClick = () => {
//                     store.dispatch(sendMessageAC())
//                 }
//
//                 const onNewMessageChange = (body: any) => {
//                    store.dispatch(updateNewMessageBodyAC(body))
//                 }
//                 return <Dialogs
//                     sendMessage={onSendMessageClick}
//                     updateNewMessageBody={onNewMessageChange}
//                     dialogsPage={state}
//                 />
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state: any) =>{
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: any) =>{
    return {
        updateNewMessageBody: (body: string)=>{dispatch(updateNewMessageBodyAC(body))},
        sendMessage: ()=>{dispatch(sendMessageAC())}
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs);


export default DialogsContainer;
