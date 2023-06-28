import React from 'react';
import x from "./Header.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";

interface HeaderContainerPropsType {
    setAuthUserDataAC: any
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                   this.props.setAuthUserDataAC(response.data.data.id, response.data.data.email, response.data.data.login);
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});


export default connect(mapStateToProps, {setAuthUserDataAC}) (HeaderContainer);