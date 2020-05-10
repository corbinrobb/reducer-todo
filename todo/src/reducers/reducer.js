export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Learn about other things',
    completed: false,
    id: 3892988889
  }
]

 export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'TOGGLE_COMPLETED':
      return state.map( todo => {
        if(action.payload === todo.id) return { ...todo, completed: !todo.completed }
        return todo;
      })
    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
}