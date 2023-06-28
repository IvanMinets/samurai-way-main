import React from 'react';
import x from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props: any) => {
    return (
        <header className = {x.header}>
            <img src='https://i0.wp.com/bluebubbleworld.org/wp-content/uploads/2017/05/logo-blue-just-image-300x300.png?fit=300%2C300&ssl=1' alt="#"/>
            <div className={x.loginBlock}>
                {props.isAuth ? props.login :<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;