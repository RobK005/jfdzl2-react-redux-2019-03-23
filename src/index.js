import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux'

import counterReducer, {inc, dec} from './store/counter'
import todosReducer, {add} from './store/todo'

import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';


const store = createStore(
    combineReducers({
        counter: counterReducer,
        todos: todosReducer
    }),

    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)


window.inc = () => store.dispatch(inc())
window.dec = () => store.dispatch(dec())
window.add = (text) => store.dispatch(add(text))

store.dispatch({
    type: 'ADD_TODO',
    text: 'Shopping'
})

window.inc()


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
