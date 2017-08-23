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

    default:
      return state
  }
}