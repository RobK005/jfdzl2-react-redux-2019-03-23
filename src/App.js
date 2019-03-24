import React, { Component } from 'react';
import Counter from './Counter.js'
import TodoList from './TodoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Redux
        <Counter></Counter>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
