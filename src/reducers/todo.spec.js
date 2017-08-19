import reducer from './todo';
import {ADD_TODO} from './todo';

describe( 'todo reducer', () => {

  test( 'reducer', () => {
    const result = reducer( undefined, { type: 'foobar' } );
    expect( result ).toBeDefined();
  } );

  test( 'add todo', () => {
    const startState = {
      todos:[
        { id: 0, name: 'Todo 1', isComplete: false }
      ]
    };

    const expected = {
      todos:[
        { id: 0, name: 'Todo 1', isComplete: false },
        { id: 1, name: 'Todo 2', isComplete: false }
      ]
    };

    const action = {
      type: ADD_TODO,
      payload: { id: 1, name: 'Todo 2', isComplete: false }
    };

    const actual = reducer( startState, action );

    expect( actual ).toEqual( expected );
    expect( actual ).not.toBe( expected );
  } )

} );