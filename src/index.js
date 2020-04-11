import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import './styles/custom.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// work offline and load faster, you can change
// unregister() to register() below.
serviceWorker.register();
