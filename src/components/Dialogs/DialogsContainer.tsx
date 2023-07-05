import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state: any) =>{
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: any) =>{
    return {
        updateNewMessageBody: (body: string)=>{dispatch(updateNewMessageBodyAC(body))},
        sendMessage: ()=>{dispatch(sendMessageAC())}
    }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (AuthRedirectComponent);

export default DialogsContainer;
