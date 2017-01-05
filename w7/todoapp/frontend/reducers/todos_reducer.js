import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';


const todosReducer = (state=initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODO:
      return merge({}, state, {[action.todo.id]: action.todo});

    case RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach(todo => {
        newState[todo.id] = todo;
      });
      return Object.assign({}, newState, state);

    case REMOVE_TODO:
      const dupState = merge({}, state);
      delete dupState[action.todo.id];
      return dupState;
    default:
      return state;
  }
};

// reducers/todos_reducer.js
const initialState = {};

window.todosReducer = todosReducer;


export default todosReducer;
