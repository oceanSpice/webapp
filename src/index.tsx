import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import Styles from './global/Styles';
import { UserInputProvider } from './providers/UserInput';

ReactDOM.render(
  <React.StrictMode>
      <Styles>
        <App />
      </Styles>
  </React.StrictMode>,
  document.getElementById('root')
);