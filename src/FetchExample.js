import React, { useEffect, useMemo, useState } from 'react';

const TodoItem = ({ id, title, completed }) => {
  return (
    <div>
      Todo: {id} --- Title: {title} -{' '}
      {completed ? 'Completed' : 'Not Completed'}
    </div>
  );
};

const FetchExample = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
      );
      const data = await response.json();
      setTodos(data);
      setIsLoading(false);
    }
    getTodos();
  }, []);

  const last10Todos = useMemo(() => {
    return todos.slice(-10);
  }, [todos]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {last10Todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default FetchExample;
