import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/root_reducer';
import Root from './components/root';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

document.addEventListener('DOMContentLoaded',()=>{
  const middlewares = [thunk, logger];
  let preloadedState = {};
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={createStore(RootReducer, preloadedState, applyMiddleware(...middlewares))}/>, root);
});
