import React from 'react';

function Todo({remove, msg, id}) {
  
  const handleRemove = () => {
    remove(id);
  }

  return (
    <div className="Todo" onClick={handleRemove} style={{border: "2px solid black"}}>
      <p>{msg}</p>
    </div>
  );
}

export default Todo;