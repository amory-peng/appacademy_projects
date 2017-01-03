import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uniqueID = this.uniqueID.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  uniqueID() {
    return new Date().getTime();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo({id: this.uniqueID(), title: this.state.title, body: this.state.body});
  }

  updateTodo(key) {
    console.log(this.state.title, this.state.body);
    return (event => this.setState({[key]: event.target.value} ));

  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          Title
          <input type="text" onChange={this.updateTodo('title')} value={this.state.title}></input>
          Body
          <input type="text" onChange={this.updateTodo('body')} value={this.state.body}></input>
          <button>Add Todo</button>
        </form>
      </div>
    );
  }


}

export default TodoForm;
