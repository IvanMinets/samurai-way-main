import { ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {loginTC} from "../../redux/auth-reducer";
import {Login} from "./Login";

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
    login: loginTC
}

export const LoginContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps)
)(Login)


//types
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof mapDispatchToProps

export type LoginPropsType = MapStatePropsType & MapDispatchPropsType