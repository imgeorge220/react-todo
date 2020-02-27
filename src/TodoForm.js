import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const INITIAL_STATE = { msg: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = evt => {
    evt.preventDefault();
    addTodo(formData);
    setFormData(INITIAL_STATE);
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({
      ...oldFormData,
      [name]: value
    }));
  }

  return (
    <div className="TodoForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="msg">Todo:</label>
        <input
          id='msg'
          name="msg"
          value={formData.msg}
          onChange={handleChange}
        />
        <button type='submit'>Add Todo!</button>
      </form>
    </div>
  );
}

export default TodoForm;
