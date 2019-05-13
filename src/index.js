import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Root from './root';
// import configureStore from './redux/store/store';
//
//
// document.addEventListener('DOMContentLoaded', () => {
//   let store;
//   const preloadedState = {}
//   store = configureStore(preloadedState);
//
//   const root = document.getElementById('root');
//   ReactDOM.render(<Root store={store} />, root);
//
// });
