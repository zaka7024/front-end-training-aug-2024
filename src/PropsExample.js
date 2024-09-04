import React, { useState } from 'react';

const PropsExample = () => {
  const [counter, setCounter] = useState(0);

  console.log('rerender');

  return <ParentComponent counter={counter} setCounter={setCounter} />;
};

const ParentComponent = ({ counter, setCounter }) => {
  console.log('ParentComponent - rerender');
  return (
    <div>
      ParentComponent - Counter: {counter}
      <ChildComponent counter={counter} setCounter={setCounter} />
    </div>
  );
};

const ChildComponent = ({ counter, setCounter }) => {
  console.log('ChildComponent - rerender');

  return (
    <div>
      ChildComponent - Counter: {counter}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};

export default PropsExample;
