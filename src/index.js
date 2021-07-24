import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ResultProvider } from "./reducer/searchReducer";


ReactDOM.render(
  <React.StrictMode>
    <ResultProvider>
    <App />
    </ResultProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
