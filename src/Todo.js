import React, { useState } from 'react';

function Todo({remove, msg, id, editTodo}) {
  const INITIAL_STATE = { msg: msg };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [editShown, setEditShown] = useState("none");

  const handleRemove = () => {
    remove(id);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    editTodo(formData, id);
    setFormData(INITIAL_STATE);
    setEditShown("none")
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({
      ...oldFormData,
      [name]: value
    }));
  }

  function showEdit(){
    setEditShown("");
  }

  return (
    <div data-testid="todo" className="Todo"  style={{border: "2px solid black"}}>
      <p >{msg}</p>
      <button onClick={handleRemove}>Delete</button>
      <button onClick={ showEdit }>Edit!</button>
      <form onSubmit={handleSubmit} style={{display: editShown}}>
        <label htmlFor="msg">Edit Todo:</label>
        <input
          id='msg'
          name="msg"
          value={formData.msg}
          onChange={handleChange}
        />
        <button type='submit'>Edit Todo!</button>
      </form>
    </div>
  );
}

export default Todo;
