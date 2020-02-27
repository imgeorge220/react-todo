import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import uuid from "uuid/v4"

function TodoList() {
  const [todos, setTodos] = useState([]);

  const remove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const addTodo = todo => {
    let newTodo = { ...todo, id: uuid() };
    setTodos(oldTodos => [...oldTodos, newTodo]);
  }

  return (
    <div className="TodoList">
      <TodoForm addTodo={addTodo} />
      <div>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            remove={remove}
            msg={todo.msg}
            id={todo.id}
          />
        )}
      </div>
    </div>
  );
}

export default TodoList;
