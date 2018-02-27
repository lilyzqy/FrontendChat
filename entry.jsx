import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import RootReducer from './reducers/root_reducer';
import App from './components/app';

document.addEventListener('DOMContentLoaded',()=>{
  const root = document.getElementById('root');
  ReactDOM.render(<App store={createStore(RootReducer)}/>);
});
