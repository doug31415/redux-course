import {getTodos} from "../lib/todo.service";

// initial state
const initState = {
  todos          : [],
  currentTodoName: ''
};

// action consts
const TODO_ACTIONS = {
  addTodo              : 'addTodo',
  loadTodos            : 'loadTodos',
  updateCurrentTodoName: 'updateCurrentTodoName'
};

export const addTodoAction = ( payload ) => {
  return {
    type   : TODO_ACTIONS.addTodo,
    payload: payload
  };
};

export const updateCurrentTodoNameAction = ( payload ) => {
  return {
    type   : TODO_ACTIONS.updateCurrentTodoName,
    payload: payload
  };
};

export const loadTodos = ( todos ) => {
  return {
    type   : TODO_ACTIONS.loadTodos,
    payload: todos
  }
};

export const fetchTodos = () => {
  return ( dispatch ) => {
    getTodos().then(
        ( response ) => dispatch( loadTodos( response ) )
    )
  }
};

export default ( state = initState, action ) => {
  let newState;

  switch( action.type ) {

    case TODO_ACTIONS.addTodo:
      newState = {
        ...state,
        todos: state.todos.concat( [ action.payload ] )
      };
      return newState;

    case TODO_ACTIONS.updateCurrentTodoName:
      newState = {
        ...state,
        currentTodoName: action.payload
      };
      return newState;

    case TODO_ACTIONS.loadTodos:
      newState = {
        ...state,
        todos: action.payload
      };
      return newState;

    default:
      return state;
  }
}