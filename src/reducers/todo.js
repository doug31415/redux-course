const initState = {
  todos          : [
    { id: 0, name: 'shazam', isComplete: true }
  ],
  currentTodoName: 'test'
};

export const TODO_ACTIONS = {
  addTodo              : 'addTodo',
  updateCurrentTodoName: 'updateCurrentTodoName'
};

export default ( state = initState, action ) => {

  let newState;

  switch ( action.type ) {

    case TODO_ACTIONS.addTodo:
      newState = { ...state, todos: state.todos.concat( [action.payload] ) };
      return newState;

    case TODO_ACTIONS.updateCurrentTodoName:
      newState = { ...state, currentTodoName: action.payload };
      return newState;

    default:
      return state;
  }
}