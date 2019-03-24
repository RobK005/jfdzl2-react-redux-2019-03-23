import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux'

import {Provider} from 'react-redux'
import counterReducer, {inc, dec} from './store/counter'
import todosReducer, {addTodo, toggleTodo, deleteTodo} from './store/todo'

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
window.addTodo = (text) => store.dispatch(addTodo(text))
window.toggleTodo = (id) => store.dispatch(toggleTodo(id))
window.deleteTodo = (id) => store.dispatch(deleteTodo(id))

store.dispatch(addTodo('Shopping'))
store.dispatch(addTodo('Washing'))
store.dispatch(toggleTodo(1))
store.dispatch(deleteTodo(2))

window.inc()

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
