import userAisle from './userAisle';

import middleware from 'redux-promise-middleware';
import { combineReducers, createStore, applyMiddleware } from 'redux';


const reducer = combineReducers({
    userAisle
})

export default createStore(reducer, applyMiddleware(middleware))