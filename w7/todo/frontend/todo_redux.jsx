import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import App from './components/app';
import {receiveTodo, receiveTodos} from './actions/todo_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootElement = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootElement);
  // ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
  console.log(store);
  window.store = store;
});
