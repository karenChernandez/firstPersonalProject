import React from 'react';
import { Link } from 'react-router-dom';

function Todo_list(){

    return(<div>
        <h1>This is the ToDo Component</h1>
        <nav>
            <Link to='/Menu'>Menu</Link>
            <Link to='/'>Logout</Link>
        </nav>
    </div>)
}


export default Todo_list;