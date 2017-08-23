import React, {Component} from 'react'
import {connect} from 'react-redux'
import TodoItem from './TodoItem'
import {getTodos} from "../reducers/todo";

class TodoList extends Component {

  componentDidMount() {
    this.props.getTodos()
  }

  render() {
    return (
        <div className="todo-list">

          <ul>
            {this.props.todos.map(
                todo => <TodoItem key={todo.id}
                                  {...todo}/>
            )}
          </ul>
        </div>
    )
  }
}

export default connect(
    ( state ) => ( { todos: state.todo.todos } ),
    { getTodos }
)( TodoList );