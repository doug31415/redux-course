
export const getNextId = (todos) => {

  var highestIdx = todos.reduce(
      ( max, todo ) => {
        return Math.max( todo.id, max )
      }, 0
  );

  return highestIdx + 1;
};
