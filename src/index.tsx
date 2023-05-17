import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType, updateNewPostText} from "./redux/state";
import {addPost} from "./redux/state";


export let rerenderEntireTree = (state?:any) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    )
};
rerenderEntireTree(state);

subscribe(rerenderEntireTree);