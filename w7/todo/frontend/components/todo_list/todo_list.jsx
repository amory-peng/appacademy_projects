import React from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = (props) => {
  console.log(props.receiveTodo);
  return (
    <div className = "todo-list">

      <ul>
        {
          props.todos.map((todo, i) => (
            <TodoListItem todo={todo} removeTodo={props.removeTodo} />
          ))
        }
      </ul>

      <TodoForm receiveTodo={props.receiveTodo}/>
    </div>
  );
};

export default TodoList;
