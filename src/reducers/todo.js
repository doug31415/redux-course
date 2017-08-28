import {addTodoApi, getTodosApi, updateTodoApi, deleteTodoApi} from "../lib/todo.api";
import {showMessageAction} from "./messages";
import _ from 'lodash';

// initial state
const initState = {
  todos          : [],
  currentTodoName: ''
};

// action consts
export const TODO_ACTIONS = {
  addTodo              : 'addTodo',
  updateTodo           : 'updateTodo',
  deleteTodo           : 'deleteTodo',
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

export const deleteTodoAction = ( payload ) => {
  return {
    type   : TODO_ACTIONS.deleteTodo,
    payload: payload
  };
};

export const updateTodoAction = ( payload ) => {
  return {
    type   : TODO_ACTIONS.updateTodo,
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
    dispatch( showMessageAction( 'Loading Todos...' ) );

    getTodosApi()
        .then(
            ( response ) => dispatch( getTodosAction( response ) )
        )
  }
};

export const addTodo = ( name ) => {
  return ( dispatch ) => {
    dispatch( showMessageAction( `Saving todo ${name}` ) );
    addTodoApi( name )
        .then(
            ( response ) => dispatch( addTodoAction( response ) )
        )
  }
};

export const deleteTodo = ( id ) => {
  return ( dispatch ) => {
    dispatch( showMessageAction( `Deleting todo ${id}` ) );
    deleteTodoApi( id )
        .then(
            () => dispatch( deleteTodoAction( id ) )
        )
  }
};

export const toggleTodo = ( id ) => {
  console.log( 'toggleTodo', id );

  return ( dispatch, getState ) => {
    const { todos } = getState().todo;
    const todo = _.find( todos, { id: id } );
    const toggled = {
      ...todo,
      isComplete: !todo.isComplete
    };

    dispatch( showMessageAction( `Setting ${toggled.name} to ${toggled.isComplete ? 'complete' : 'incomplete'}` ) );
    updateTodoApi( toggled )
        .then(
            ( response ) => dispatch( updateTodoAction( response ) )
        )
  }
};

export const getVisibleTodos = ( todos, filter ) => {
  switch( filter ) {
    case 'active':
      return todos.filter( todo => !todo.isComplete );

    case 'completed':
      return todos.filter( todo => todo.isComplete );

    default:
      return todos;
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

    case TODO_ACTIONS.updateTodo:

      newState = {
        ...state,
        currentTodoName: '',
        todos          : state.todos.map(
            ( todo ) => todo.id === action.payload.id
                ? action.payload
                : todo
        )
      };
      return newState;

    case TODO_ACTIONS.deleteTodo:

      newState = {
        ...state,
        currentTodoName: '',
        todos          : state.todos.filter(
            ( todo ) => todo.id !== action.payload
        )
      };
      console.log( 'deleting, newState', newState );
      return newState;

    case
    TODO_ACTIONS.updateCurrentTodoName
    :
      newState = {
        ...state,
        currentTodoName: action.payload
      };
      return newState;


    default:
      return state;
  }
}