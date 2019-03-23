import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return state + 1
        case 'DECREMENT_COUNTER':
            return state - 1
        default:
            return state
    }
}

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log('initial state', store.getState())
store.dispatch({
    type: 'INCREMENT_COUNTER'
})
store.dispatch({
    type: 'DECREMENT_COUNTER'
})
store.dispatch({
    type: 'DECREMENT_COUNTER'
})
console.log('state after dispatch',store.getState())

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
