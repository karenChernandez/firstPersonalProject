import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logOut } from './../../redux/userAisle';




function Menu(props) {

    return (<div>
        <h1>This is the Menu Component</h1>
        <nav className='menu'>
            <Link to='/Profile'>Profile Setting</Link>
            <Link to='/Calendar'>Calendar</Link>
            <Link to='/Todo_list'>Todo List</Link>
            <Link to='/Study_chart'>Study Chart</Link>
            <Link to='/Notes'>Notes</Link>
            <Link onClick={()=>props.logOut()}>Logout</Link>
        </nav>
    </div>)
}



const mapStateToProps= state =>state;
export default connect(mapStateToProps, {logOut}) (Menu);