import React, { useState } from 'react';

const TodoForm = ({ dispatch }) => {
  const [ input, setInput ] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();
    if(!input) return;
    dispatch({
      type: 'ADD_TODO', 
      payload: {
        item: input,
        completed: false,
        id: Date.now(),
        completedDate: null
      }
    })
    setInput('');
  }

  const clearCompleted = (e) => {
    e.preventDefault();
    dispatch({ 
      type: 'CLEAR_COMPLETED'
     })
  }

  return (
    <form onSubmit={formSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Add Todo</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;