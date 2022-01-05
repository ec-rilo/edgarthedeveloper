import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/reset.css';
import './index.css';
import RouteSwitch from './RouteSwitch';

ReactDOM.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
  document.getElementById('root')
);
