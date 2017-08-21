const baseUrl = 'http://localhost:8100';
const todosUrl = baseUrl + '/todos';

export const getTodosApi = () => {
  return fetch( todosUrl ).then(
      ( response ) => response.json()
  )
};

export const addTodoApi = ( name ) => {
  console.log( 'addTodoApi' );


  const newTodo = {
    name      : name,
    isComplete: false
  };

  return fetch( todosUrl, {
    method : 'POST',
    headers: {
      'Accept'      : 'application/json',
      'Content-Type': 'application/json'
    },
    body   : JSON.stringify( newTodo )
  } ).then(
      ( response ) => console.log( '..added', response ) || response.json()
  )
};