import React from 'react';

const Todo = ({ data, dispatch }) => {
  return (
    <div 
      style={{ color: (data.completed) ? 'red' : 'black' }} 
      onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: data.id })}
    >
      {data.item}
    </div>
  );
}

export default Todo;