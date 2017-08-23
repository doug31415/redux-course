import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todo from './reducers/todo';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
  todo,
  composeWithDevTools(
    applyMiddleware( thunk )
  )
);