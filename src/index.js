import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Connect } from '@blockstack/connect';

const authOptions = {
  manifestPath: window.location.origin+'/manifest.json',
  finished: () => {
    alert('Authentication success!');
  },
  appDetails: {
    name: 'Tete Login',
    icon: './logo.svg',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Connect authOptions={authOptions} >
      <App />
    </Connect>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
