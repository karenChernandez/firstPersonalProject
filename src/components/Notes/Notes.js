import React from 'react';
import { Link } from 'react-router-dom';

function Notes() {

    return (<div>
        <h1>This is the Notes Component</h1>
        <nav>
            <Link to='/Menu'>Menu</Link>
            <Link to='/'>Logout</Link>
        </nav>
    </div>)
}


export default Notes;