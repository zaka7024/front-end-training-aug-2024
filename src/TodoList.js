// import './App.css';

import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, showTitle = false }) {
  console.log(todos);

  return (
    <React.Fragment>
      {showTitle && <h1>Total Todos: {todos.length}</h1>}

      <div className='todo-list'>
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={todo.id}
              title={todo.title}
              description={todo.description}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default TodoList;
