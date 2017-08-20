import {getNextId} from "./todo.helper";

it( 'should get the next id from an array of todos', () => {
  const todos = [
    {
      id: 1,
      name: 'Todo 1',
      isComplete: false
    },
    {
      id: 11,
      name: 'Todo 11',
      isComplete: false
    },
    {
      id: 12,
      name: 'Todo 12',
      isComplete: false
    },
    {
      id: 2,
      name: 'Todo 2',
      isComplete: false
    }
  ];


  const actual = getNextId(todos);
  expect( actual ).toBe( 13 );
} );