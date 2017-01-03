import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import allTodos from '../reducers/selectors';

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
