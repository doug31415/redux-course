import {addTodoApi, getTodosApi} from "../lib/todo.api";

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


export const getTodosAction = ( todos ) => {
  return {
    type   : TODO_ACTIONS.loadTodos,
    payload: todos
  }
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

export const getTodos = () => {
  return ( dispatch ) => {
    getTodosApi().then(
        ( response ) => dispatch( getTodosAction( response ) )
    )
  }
};

export const addTodo = ( name ) => {

  return ( dispatch ) => {
    addTodoApi( name ).then(
      ( response ) => dispatch( addTodoAction( response ) )
    )
  }
};

export default ( state = initState, action ) => {
  let newState;

  switch( action.type ) {

    case TODO_ACTIONS.loadTodos:
      newState = {
        ...state,
        todos: action.payload
      };
      return newState;

    case TODO_ACTIONS.addTodo:
      newState = {
        ...state,
        currentTodoName: '',
        todos          : state.todos.concat( [ action.payload ] )
      };
      return newState;

    case TODO_ACTIONS.updateCurrentTodoName:
      newState = {
        ...state,
        currentTodoName: action.payload
      };
      return newState;


    default:
      return state;
  }
}