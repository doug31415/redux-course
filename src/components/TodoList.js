import React, {Component} from 'react'
import TodoItem from './TodoItem'
import {connect} from 'react-redux'
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
    ( state ) => ( { todos: state.todos } ),
    { getTodos }
)( TodoList );