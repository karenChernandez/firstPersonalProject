import React from 'react';
import { Link } from 'react-router-dom';


function Goal() {

    return (<div>
        <h1>What do you want to accomplish in this Bootcamp?(Main Goal)</h1>
        <input></input>
        <Link to='/Profile'>
            <button>Submit</button>   
        </Link>
        <Link to='/Goal'><button>Edit</button></Link>
    </div>)
}


export default Goal;