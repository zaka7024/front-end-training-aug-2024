import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

// jsx => javascript + xml
// babel => jsx to js

// (state) => UI

const Header = (props) => {
  const { title, color, backgroundColor } = props;

  return (
    <h1
      style={{
        color: color,
        backgroundColor,
      }}
    >
      {title}
    </h1>
  );
};

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('My Title');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  return (
    <div className='App'>
      <div className='todos-actions'>
        Title:
        <input
          className='todos-input'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        Description:
        <input
          className='todos-input'
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <button
          onClick={() => {
            if (!title || !description) {
              setError('Title and description are required');
              return;
            }

            setError(null);

            const newTodo = {
              id: new Date().getTime(),
              title,
              description,
            };
            todos.push(newTodo);
            setTodos([...todos]);

            setTitle('');
            setDescription('');
          }}
          type='button'
        >
          Add Todo
        </button>
      </div>

      <TodoList todos={todos} showTitle />

      {/* <Header title='Home Page' color='#F00' backgroundColor='#000' /> */}
    </div>
  );
}

export default App;
