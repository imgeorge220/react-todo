import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import uuid from "uuid/v4"
import { queryByTestId } from '@testing-library/react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const remove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const addTodo = todo => {
    let newTodo = { ...todo, id: uuid() };
    setTodos(oldTodos => [...oldTodos, newTodo]);
  }

  function editTodo(todo, id){
    const newTodos = [...todos]


    for(let i = 0; i < newTodos.length; i++){
      if(newTodos[i].id === id){
        newTodos[i] = todo;
      }
    }

    setTodos(newTodos);
  }
  

  return (
    <div className="TodoList">
      <TodoForm addTodo={addTodo} />
      <div data-testid="todo-container">
        {todos.map(todo =>
          <Todo
            key={todo.id}
            remove={remove}
            msg={todo.msg}
            id={todo.id}
            editTodo={editTodo}
          />
        )}
      </div>
    </div>
  );
}

export default TodoList;
