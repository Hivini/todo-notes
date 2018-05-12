import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

document.body.style = 'background: #F6F8F9;';
let state = {};
window.setState = (changes) => {
    state = Object.assign({}, state, changes);
    ReactDOM.render(<App {...state}/>, document.getElementById('root'));
};

/* eslint no-restricted-globals: 0*/

let initialState = {
    name: "Username",
    location: location.pathname.replace(/^\/?|\/$/g, "")
};

window.setState(initialState);


registerServiceWorker();
