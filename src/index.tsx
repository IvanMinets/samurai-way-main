import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import StoreContext, {Provider} from "./StoreContext";
import {BrowserRouter} from "react-router-dom";
import {RootStateType} from "./redux/store";



export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>,
            </Provider>,
        </BrowserRouter>,
        document.getElementById('root')
    )
};
rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state)
});