import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/root_reducer';
import Root from './components/root';
import thunk from 'redux-thunk';

document.addEventListener('DOMContentLoaded',()=>{
  const middlewares = [thunk];
  let preloadedState = {};
  const store = createStore(RootReducer, preloadedState, applyMiddleware(...middlewares));
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
