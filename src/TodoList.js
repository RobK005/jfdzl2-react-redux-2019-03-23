import React from 'react';

const TodoList = props => {
  console.log('TodoList props: ', props);
  return (
    <div>
      <input />
      {
        props.todos
          ? props.todos.map(todo => {
            return <div>
              {todo.text}
              <button type="button">X</button>
            </div>
          })
          : <div>No todos on your list yet</div>
      }
    </div>
  )
}

export default TodoList;