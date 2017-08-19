import React from 'react';

export default ( props ) => {

  return (
    <form className="todo-form"
          onSubmit={props.submit}>

      <input type="text"
             onChange={props.handleInputChange}
             value={props.currentTodoName}/>
    </form>
  )
};