import reducer from './todo';
import {addTodoAction, updateCurrentTodoNameAction} from './todo';

describe( 'todo reducer', () => {

  test( 'reducer', () => {
    const result = reducer( undefined, { type: 'foobar' } );
    expect( result ).toBeDefined();
  } );

  test( 'add todo', () => {
    const startState = {
      todos: [
        {
          id: 0,
          name: 'Todo 1',
          isComplete: false
        }
      ]
    };

    const expected = {
      todos: [
        {
          id: 0,
          name: 'Todo 1',
          isComplete: false
        },
        {
          id: 1,
          name: 'Todo 2',
          isComplete: false
        }
      ]
    };

    const newTodo = {
      id: 1,
      name: 'Todo 2',
      isComplete: false
    };

    const actual = reducer( startState, addTodoAction(newTodo) );

    expect( actual ).toEqual( expected );
    expect( actual ).not.toBe( expected );
  } );

  test( 'updateCurrentTodoName', () => {
    const startState = {
      currentTodoName: undefined
    };

    const expected = {
      currentTodoName: '2'
    };

    const actual = reducer( startState, updateCurrentTodoNameAction('2') );

    expect( actual ).toEqual( expected );
    expect( actual ).not.toBe( expected );

    const expected2 = {
      currentTodoName: '23'
    };

    const actual2 = reducer( actual, updateCurrentTodoNameAction('23') );

    expect( actual2 ).toEqual( expected2 );
    expect( actual2 ).not.toBe( expected2 );
  } )

} );