import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

type AppPropsType = {
    posts: {id: number, message: string, likesCount: number}[]
    dialogs: {id: number, name: string}[]
    messages: {id: number, message: string}[]
}
const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={()=><Dialogs dialogs = {props.dialogs} messages={props.messages}/>}/>
                    <Route path="/profile" render={()=><Profile posts={props.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
