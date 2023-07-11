// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line import/extensions
import ReactDOM from 'react-dom/client';
import './index.css';
// eslint-disable-next-line import/extensions, no-unused-vars
import App from './App';
// eslint-disable-next-line import/extensions
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
