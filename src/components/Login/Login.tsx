import React from 'react'

export const LoginForm = (props: any) => {
    return (
    <form action="">
        <div>
            <input placeholder={"login"} type="text"/>
        </div>
        <div>
            <input placeholder={"login"} type="text"/>
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


export const Login = (props: any) => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}