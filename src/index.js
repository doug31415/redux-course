import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

// render the app
const render = () => {
  const state = store.getState();
  ReactDOM.render( <App {...state} />, document.getElementById( 'root' ) );
};

// monitor the store for changes and re-render the app
store.subscribe( render );

// initial render
render();
registerServiceWorker();
