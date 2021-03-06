import React from 'react';
import ReactDOM from 'react-dom';
import { createStore }  from 'redux';
import { BrowserRouter } from 'react-router-dom';
 

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
         <App />
    </BrowserRouter>,
 document.getElementById('root'));
registerServiceWorker();
