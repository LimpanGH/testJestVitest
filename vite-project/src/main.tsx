import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Button from './button';  // Adjust the path as necessary
import './index.css';

const handleClick = () => {
  alert('Button clicked!');
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Button label="Click Me" onClick={handleClick} />
  </React.StrictMode>,
);
