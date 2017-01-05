import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';
import errorReducer from './error_reducer';

export default combineReducers({
  todos: todosReducer,
  errors: errorReducer
});
