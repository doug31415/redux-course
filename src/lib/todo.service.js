export const getTodos = () => {
  const url = 'http://localhost:8100/todos';
  return fetch( url ).then(
      ( response ) =>  response.json()
  )
}