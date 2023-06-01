import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, RootStateType, StoreType} from "./redux/store";

type AppPropsType = {
    store: any
    dispatch: (action: ActionsTypes) => void
}

const App = (props: AppPropsType) => {
    const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs store={props.store}/>}/>

                    <Route path="/profile" render={() => <Profile
                        posts={state.profilePage.posts}
                        dispatch={props.store.dispatch.bind(props.store)}
                        message={state.profilePage.newPostText}
                    />}/>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
