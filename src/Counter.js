import { useCallback, useEffect, useMemo, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(1000000000);

  console.log('rerender');

  // let x = 0;
  // for (let i = 0; i < target; i++) {
  //   x += 1;
  // }

  // Example of useMemo
  // const todos = [];
  // const thisMonthTodos = useMemo(() => {
  //   return todos.filter(
  //     (todo) => todo.dueDate.getMonth() === new Date().getMonth(),
  //   );
  // }, [todos]);

  const sum = useMemo(() => {
    console.log('useMemo');

    let x = 0;
    for (let i = 0; i < target; i++) {
      x += 1;
    }
    return x;
  }, [target]);

  const resetCounter = useCallback(() => {
    console.log('useCallback');
    setCount(0);
  }, []);

  // This will run when component mounted
  useEffect(() => {
    console.log('useEffect');
  }, []);

  useEffect(() => {
    if (count > 10) {
      setTarget(1000000000 / 2);
      resetCounter();
    }
  }, [count]);

  return (
    <div>
      <p>{sum}</p>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Inc
      </button>
    </div>
  );
}

export default Counter;
