import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';
import { receiveTodo, removeTodo, fetchTodos, createTodo, updateTodo, deleteTodo } from '../../actions/todo_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: (todo) => dispatch(fetchTodos(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
