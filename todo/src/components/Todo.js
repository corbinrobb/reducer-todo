import React from 'react';
import moment from 'moment';

const Todo = ({ data, dispatch }) => {
  return (
    <li 
      style={{ color: (data.completed) ? 'red' : 'black', cursor: 'pointer' }} 
      onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: { id: data.id, completedDate: moment().format("MMM Do YY") } })}
    >
      {data.item} {data.completedDate && `| Completed on ${data.completedDate}`}
    </li>
  );
}

export default Todo;