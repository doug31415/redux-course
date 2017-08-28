import React, {Component} from 'react'
import {connect} from 'react-redux'
import TodoItem from './TodoItem'
import {getTodos, toggleTodo, deleteTodo, getVisibleTodos} from "../reducers/todo";
import _ from 'lodash'

class TodoList extends Component {

  componentDidMount() {
    this.props.getTodos()
  }

  render() {
    return (
        <div className="todo-list">

          <div>Showing {this.props.filter ? _.capitalize( this.props.filter ) : 'All'}</div>

          <ul>
            {this.props.todos.map(
                todo => <TodoItem key={todo.id}
                                  toggleTodo={this.props.toggleTodo}
                                  deleteTodo={this.props.deleteTodo}
                                  {...todo}/>
            )}
          </ul>
        </div>
    )
  }
}

export default connect(
    ( state, ownProps ) => ( { todos: getVisibleTodos( state.todo.todos, ownProps.filter ) } ),
    {
      getTodos,
      getVisibleTodos,
      toggleTodo,
      deleteTodo
    }
)( TodoList );