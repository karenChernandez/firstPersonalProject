import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logOut, getUser } from '../../redux/userAisle';






class Menu extends Component{
constructor(props){
    super(props);
}

    componentDidMount(){
        this.props.getUser()
    }
    render(){
        console.log('MENU', this.props)
    return (<div className='menu'>
        <header className='profile_pic'>
            <img src={this.props.userAisle.user.profile_pic}/>
        
     
        <nav className='menu-options'>
            <Link to='/Profile'>Profile Setting</Link>
            <Link to='/Calendar'>Calendar</Link>
            <Link to='/TodoList'>Todo List</Link>
            <Link to='/Study_chart'>Study Chart</Link>
            <Link to='/Notes'>Notes</Link>
            <Link to='/'><button onClick={this.props.logOut}>Logout</button></Link>
        </nav>
        </header>
    </div>)
}
}



const mapStateToProps= state =>state;
export default connect(mapStateToProps, { logOut, getUser }) (Menu);