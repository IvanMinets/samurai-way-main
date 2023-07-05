import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataTC,} from "../../redux/auth-reducer";

interface HeaderContainerPropsType {
    getAuthUserData: any
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});


export default connect(mapStateToProps, {getAuthUserData: getAuthUserDataTC})(HeaderContainer);