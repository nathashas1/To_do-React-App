// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from '../reducers/root_reducer';
//
// const configureStore = (preloadedState = {}) => (
//   createStore(
//     rootReducer,
//     preloadedState,
//     applyMiddleware()
//   )
// );
//
// export default configureStore;

import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers/root_reducer';
function configureStore(state = {}) {
  return createStore(rootReducer,state);
}
export default configureStore;

//
// import { createStore, applyMiddleware } from 'redux';
//
//
// import rootReducer from '../reducers/root_reducer';
//
// const configureStore = (preloadedState = {}) => (
//   createStore(
//     rootReducer,
//     preloadedState,
//     applyMiddleware()
//   )
// );

// export default configureStore;
