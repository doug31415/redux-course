import React from 'react'
import store from '../store'
import {getNextId} from "../helpers/todo.helper"
import {connect} from 'react-redux'
import {addTodoAction, updateCurrentTodoNameAction} from "../reducers/todo"

const TodoForm = ( props ) => {

  const { currentTodoName, updateCurrentTodoNameAction, addTodoAction } = props;

  const handleInputChange = ( evt ) => {
    const val = evt.target.value;
    updateCurrentTodoNameAction( val )
  };

  const handleSubmit = () => {
    const state = store.getState();

    const newTodo = {
      id: getNextId( state.todos ),
      name: state.currentTodoName,
      isComplete: false
    };

    addTodoAction( newTodo );
    updateCurrentTodoNameAction( '' );
  };

  return (
      <form className="todo-form">

        <input type="text"
               onChange={handleInputChange}
               value={currentTodoName}/>

        <button type="button"
                className={'primary button' + (!currentTodoName ? ' disabled' : '')}
                disabled={!currentTodoName}
                onClick={handleSubmit}>Add Todo
        </button>
      </form>
  )
};


export default connect(
    ( state ) => ({ currentTodoName: state.currentTodoName }),
    {addTodoAction, updateCurrentTodoNameAction}
)( TodoForm );