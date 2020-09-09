import userAisle from './userAisle';
import todoAisle from './todoAisle';
import middleware from 'redux-promise-middleware';
import { combineReducers, createStore, applyMiddleware } from 'redux';


const reducer = combineReducers({
    userAisle,
    todoAisle
})

export default createStore(reducer, applyMiddleware(middleware))