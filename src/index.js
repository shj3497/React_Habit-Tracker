import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit'

// React.StrictMode : 에러 메세지 표시도구정도의 느낌
ReactDOM.render(
  <React.StrictMode>
    <App />,
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById('root')
);
