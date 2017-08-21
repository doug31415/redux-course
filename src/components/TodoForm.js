import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateCurrentTodoNameAction} from "../reducers/todo"
import {addTodo} from "../reducers/todo";

class TodoForm extends Component {

  handleInputChange = ( evt ) => {
    const val = evt.target.value;
    this.props.updateCurrentTodoNameAction( val )
  };

  handleSubmit = ( evt ) => {
    //stop the return from causing a reload
    evt.preventDefault();

    addTodo( this.props.currentTodoName );
  };


  render() {

    const { currentTodoName } = this.props;

    return (
        <form className="todo-form"
              onSubmit={this.handleSubmit}>

          <input type="text"
                 onChange={this.handleInputChange}
                 value={currentTodoName}/>

          <button type="submit"
                  className={'primary button' + (!currentTodoName ? ' disabled' : '')}
                  disabled={!currentTodoName}>Add Todo
          </button>
        </form>
    )
  }

};


export default connect(
    ( state ) => ({ currentTodoName: state.currentTodoName }),
    {
      addTodo,
      updateCurrentTodoNameAction
    }
)( TodoForm );