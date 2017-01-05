export const fetchTodos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/todos'
  })
);

export const createTodo = (todo) => (
  $.ajax({
    method: 'POST',
    url: 'api/todos',
    data:  todo
  })
);

export const updateTodo = (todo) => {
  // console.log(todo.todo.id);
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/todos/${todo.todo.id}`,
      data: todo
    })
  );
};

export const deleteTodo = (todo) => (
  $.ajax({
    method: 'DELETE',
    url: `api/todos/${todo.id}`,
  })
);
