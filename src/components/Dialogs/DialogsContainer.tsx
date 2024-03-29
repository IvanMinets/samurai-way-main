import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state: any) =>{
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: any) =>{
    return {
        updateNewMessageBody: (body: string)=>{dispatch(updateNewMessageBodyAC(body))},
        sendMessage: (newMessageBody: any)=>{dispatch(sendMessageAC(newMessageBody))}
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps), withAuthRedirect)(Dialogs);
