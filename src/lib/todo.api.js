const baseUrl = 'http://localhost:8100';
const todosUrl = `${baseUrl}/todos`;
const headers = {
  'Accept'      : 'application/json',
  'Content-Type': 'application/json'
};

export const getTodosApi = () => {
  return fetch( todosUrl ).then(
      ( response ) => response.json()
  )
};

export const addTodoApi = ( name ) => {

  const newTodo = {
    name      : name,
    isComplete: false
  };

  return fetch( todosUrl, {
    method : 'POST',
    headers: headers,
    body   : JSON.stringify( newTodo )
  } ).then(
      ( response ) => response.json()
  )
};

export const updateTodoApi = ( todo ) => {

  return fetch( `${todosUrl}/${todo.id}`, {
    method : 'PUT',
    headers: headers,
    body   : JSON.stringify( todo )
  } ).then(
      ( response ) => response.json()
  )
};

export const deleteTodoApi = ( id ) => {

  return fetch( `${todosUrl}/${id}`, {
    method : 'DELETE',
    headers: headers
  } )
};