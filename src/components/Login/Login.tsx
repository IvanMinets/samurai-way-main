import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators";

export const LoginForm = (props: any) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"login"} name={"login"} validate={[required]} component={Input} />
        </div>
        <div>
            <Field placeholder={"password"} name={"password"} validate={[required]} component={Input} />
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
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}