import React from 'react';

export default ( { name, isComplete, id } ) => (
  <li className="todo-list-item">
    <input type="checkbox"
           defaultChecked={isComplete}/>
    {name}
  </li>
)