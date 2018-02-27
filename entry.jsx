import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import RootReducer from './reducers/root_reducer';
import Root from './components/root';

document.addEventListener('DOMContentLoaded',()=>{
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={createStore(RootReducer)}/>);
});
