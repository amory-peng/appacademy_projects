import React from 'react';
import TodoDetailView from './todo_detail_view';
import merge from 'lodash/merge';
class TodoListItem extends React.Component {
  constructor(props) {


    super(props);
    this.state = { detail: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    // debugger
  }

  handleClick() {
    const newDetail = !this.state.detail;
    this.setState({ detail: newDetail} );
  }

  handleButtonClick(e) {
    return this.props.deleteTodo(this.props.todo);

  }

  toggleTodo() {
    console.log(this.props.todo.done);
    const newTodo = merge({}, this.props.todo);

    newTodo.done = !newTodo.done;
    return this.props.updateTodo({todo: newTodo});
  }



  render() {
    let view =<div></div>;
    if (this.state.detail) {
      view = <div>{<TodoDetailView todo={this.props.todo}/>}
      </div>;
    }
    let done = <div>Mark Undone</div>;
    if (!this.props.todo.done) {
      done = <div>Mark Done</div>;
    }

    return(
      <li>
        <div onClick={this.handleClick}>{this.props.todo.title}</div>
        {view}
        <button onClick={this.handleButtonClick}>Remove Todo</button>
        <button onClick={this.toggleTodo}>{done}</button>

      </li>
    );
  }
}

export default TodoListItem;
