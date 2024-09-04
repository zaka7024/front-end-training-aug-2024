import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './Counter';
import FetchExample from './FetchExample';
import PropsExample from './PropsExample';
import ContextExample from './ContextExample';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {/* <App />, */}
    <Counter />
  </React.StrictMode>,
);
