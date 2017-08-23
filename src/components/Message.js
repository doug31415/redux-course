import React from 'react'

const Message = ( { message } ) => (
  message
    ? <div className="todo-list message">{message}</div>
    : null
);

export default Message;