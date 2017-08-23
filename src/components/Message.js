import React, {Component} from 'react'
import {connect} from 'react-redux'

class Message extends Component {

  render() {
    return (
        this.props.message
            ? <div className="todo-list message">{this.props.message}</div>
            : null
    )
  }
}


export default connect(
    ( state ) => ({ message: state.message })
)( Message );