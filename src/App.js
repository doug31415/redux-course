import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import store from './store';
import { TODO_ACTIONS } from './reducers/todo';

class App extends Component {

  addTodo = () => {
    const newTodo = { id: this.getNextId(), name: store.getState().currentTodoName, isComplete: false };
    const action  = { type: TODO_ACTIONS.addTodo, payload: newTodo };
    store.dispatch( action );

    // clear the current name
    const action2 = { type: TODO_ACTIONS.updateCurrentTodoName, payload: '' };
    store.dispatch( action2 );
  };

  getNextId = () => {
    const todos    = store.getState().todos;
    var highestIdx = todos.reduce(
      ( max, todo ) => {
        return Math.max( todo.id, max )
      }, 0
    );

    return highestIdx + 1;
  };

  updateCurrentTodoName = ( evt ) => {
    const action = { type: TODO_ACTIONS.updateCurrentTodoName, payload: evt.target.value };
    store.dispatch( action );
  };

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Todo List</h2>
        </div>

        <div className="todo-app">

          <TodoForm currentTodoName={this.props.currentTodoName}
                    handleInputChange={this.updateCurrentTodoName}
                    submit={this.addTodo}/>

          <TodoList todos={this.props.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
