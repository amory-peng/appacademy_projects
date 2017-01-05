import React from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }


  render() {
    console.log(this.props.clearErrors);
    return (
      <div className = "todo-list">

        <ul>
          {
            this.props.todos.map((todo, i) => (
              <TodoListItem key={i} todo={todo} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo} removeTodo={this.props.removeTodo} />
            ))
          }
        </ul>

        <TodoForm errors={this.props.errors} createTodo={this.props.createTodo} />
      </div>
    );
  }
}


export default TodoList;
