import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Calendar  from './components/Calendar /Calendar ';
import TodoList from './components/TodoList/TodoList';
import Study_chart from './components/Study_chart/Study_chart';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Menu from './components/Menu/Menu';
import HomePage from './components/HomePage/HomePage';
// import Notes from './components/Notes/Notes';


export default(
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/Menu' component={Menu}/>
        <Route path='/Profile' component={Profile}/>
        <Route path='/Register' component={Register}/>
        <Route path='/Study_chart' component={Study_chart}/>
        <Route path='/TodoList' component={TodoList}/>
        <Route path='/Calendar' component={Calendar }/>
        <Route path='/LogOut' component={HomePage}/>
        {/* <Route path='/Notes' component={Notes}/> */}
    </Switch>
)