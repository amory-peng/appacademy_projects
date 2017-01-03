import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.todo);
    
  }


  render() {

    return (
      <div>
        <p> {this.props.todo.body} </p>
      </div>
    );
  }
}

export default TodoDetailView;
