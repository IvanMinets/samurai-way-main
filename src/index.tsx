import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/store";


export let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <App store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    )
};
rerenderEntireTree(store._state);

store.subscribe(rerenderEntireTree);