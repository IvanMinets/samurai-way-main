import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Ivan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Valera</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hi, how is your it-kamasutra?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>

    )
}

export default Dialogs;