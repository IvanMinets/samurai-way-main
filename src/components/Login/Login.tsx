import React from 'react'
import {Field, reduxForm} from "redux-form";

export const LoginForm = (props: any) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"login"} name={"login"} component={"input"} />
        </div>
        <div>
            <Field placeholder={"password"} name={"password"} component={"input"} />
        </div>
        <div>
            <Field component={"input"} name={"rememberMe"} type="checkbox"/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export const Login = (props: any) => {
    return <div>
        <h1>Login</h1>
        <LoginReduxForm/>
    </div>
}