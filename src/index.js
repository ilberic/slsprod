import React from 'react';
import ReactDOM from 'react-dom';
import store from './reducers/store'
import App from "./App"


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App dispatch={store.dispatch} store={store.getState()}/>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree);



