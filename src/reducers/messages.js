import {TODO_ACTIONS} from "./todo";

const MESSAGE_ACTIONS = {
  showMessage: 'showMessage'
};

export const showMessageAction = ( mssg ) => (
    { type   : MESSAGE_ACTIONS.showMessage,
      payload: mssg
    }
);

export default function( state = '', action ) {
  switch( action.type ) {

    case MESSAGE_ACTIONS.showMessage:
      return action.payload;

    case TODO_ACTIONS.loadTodos:
    case TODO_ACTIONS.addTodo:
    case TODO_ACTIONS.updateTodo:
    case TODO_ACTIONS.deleteTodo:
      return '';

    default:
      return state
  }
}