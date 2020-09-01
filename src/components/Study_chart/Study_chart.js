import React from 'react';
import { Link } from 'react-router-dom';

function Study_chart() {

    return (<div>
        <h1>This is the Study_chart Component</h1>
        <nav>
            <Link to='/Menu'>Menu</Link>
            <Link to='/'>Logout</Link>
        </nav>
    </div>)
}


export default Study_chart;