export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
    completedDate: null
  },
  {
    item: 'Learn about other things',
    completed: false,
    id: 3892988889,
    completedDate: null
  }
]

 export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'TOGGLE_COMPLETED':
      return state.map( todo => {
        if(action.payload.id === todo.id) return { 
            ...todo, 
            completed: !todo.completed, 
            completedDate: (!todo.completedDate) ? action.payload.completedDate : null }
        return todo;
      })
    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
}