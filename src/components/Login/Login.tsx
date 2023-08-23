import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

export const LoginForm = (props: any) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} name={"email"} validate={[required]} component={Input} />
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} type={"password"} validate={[required]} component={Input} />
        </div>
        <div>
            <Field component={Input} name={"rememberMe"} type="checkbox"/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


export const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {login: loginTC}) (Login);