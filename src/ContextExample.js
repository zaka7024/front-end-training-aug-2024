import React, { useContext, createContext, useState } from 'react';

const CounterContext = createContext({});

const ContextExample = () => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider
      value={{
        counter: counter,
        setCounter: setCounter,
      }}
    >
      <ParentComponent />
    </CounterContext.Provider>
  );
};

const ParentComponent = () => {
  const { counter, setCounter } = useContext(CounterContext);

  console.log('ParentComponent - rerender');
  return (
    <div>
      ParentComponent - Counter: {counter}
      <ChildComponent />
    </div>
  );
};

const ChildComponent = () => {
  console.log('ChildComponent - rerender');

  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      ChildComponent - Counter: {counter}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};

export default ContextExample;
