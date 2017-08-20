import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import todo from './reducers/todo';

export default createStore(
    todo,
    applyMiddleware( thunk )
);