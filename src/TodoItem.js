function TodoItem({ title, description }) {
  return (
    <div className='todo-item'>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default TodoItem;
