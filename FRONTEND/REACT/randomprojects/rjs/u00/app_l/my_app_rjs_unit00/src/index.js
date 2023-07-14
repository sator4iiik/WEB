import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
console.log(React.version);

ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // подключает реакт в <div id="root"></div>
);
