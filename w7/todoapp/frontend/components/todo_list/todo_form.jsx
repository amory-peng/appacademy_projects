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
    const todo = {
      title: this.state.title,
      body: this.state.body,
      done: false
    };

    this.props.createTodo({ todo }).then(
      () => this.setState({ title: "", body: ""})
    );
  }

  updateTodo(key) {
    return (event => this.setState({[key]: event.target.value} ));

  }


  render() {

    return(
      <div>
        <div>
          {this.props.errors}
        </div>
        <form id="submitTodo" onSubmit={this.handleSubmit}>
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
