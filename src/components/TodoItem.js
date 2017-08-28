import React from 'react';

export default ( { name, isComplete, id, toggleTodo, deleteTodo } ) => (
    <li className={'todo-list-item' + (isComplete ? ' complete' : '')}>

      <input type="checkbox"
             onChange={() => toggleTodo( id )}
             checked={isComplete}/>

      <span className="todo-name"
            onClick={() => toggleTodo( id )}>{name}</span>

      <span className="delete-btn">
        <button onClick={() => deleteTodo( id )}>x</button>
      </span>
    </li>
)