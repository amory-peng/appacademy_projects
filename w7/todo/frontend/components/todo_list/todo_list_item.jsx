import React from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
  constructor(props) {


    super(props);
    this.state = { detail: false };
    console.log(this.props);
    this.handleClick = this.handleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    // debugger
  }

  handleClick() {
    const newDetail = !this.state.detail;
    console.log(newDetail);
    this.setState({ detail: newDetail} );
  }

  handleButtonClick(e) {
    return this.props.removeTodo(this.props.todo);

  }

  render() {
    let view =<div></div>;
    if (this.state.detail) {
      view = <div>{<TodoDetailView todo={this.props.todo}/>}
      </div>;
    }

    return(
      <li onClick={this.handleClick}>
        {this.props.todo.title}
        {view}
        <button onClick={this.handleButtonClick}>Remove Todo</button>

      </li>
    );
  }
}

export default TodoListItem;
