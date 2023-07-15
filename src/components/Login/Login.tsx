import React from 'react'
import {reduxForm} from "redux-form";

export const LoginForm = (props: any) => {
    return (
    <form action="">
        <div>
            <input placeholder={"login"} type="text"/>
        </div>
        <div>
            <input placeholder={"password"} type="text"/>
        </div>
        <div>
            <input type="checkbox"/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})

export const Login = (props: any) => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}