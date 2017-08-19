import React from 'react';

export default ( { name, isComplete } ) => (
  <li className="todo-list-item">
    <input type="checkbox"
           defaultChecked={isComplete}/>
    {name}
  </li>
)