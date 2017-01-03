const allTodos = (state) => {
  const out = [];
  Object.keys(state.todos).forEach(key => {
    out.push(state.todos[key]);
  });
  return out;
};

window.allTodos = allTodos;

export default allTodos;
