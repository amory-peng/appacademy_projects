import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import { signup, login, logout } from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded',()=>{
  const root = document.getElementById('root');
  const preloadedState = {};
  const store = configureStore(preloadedState);
  window.store = store;
  ReactDOM.render(<div>bench_bnb</div>, root);
});
