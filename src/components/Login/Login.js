import React, { Component } from 'react';
import {loginUser} from './../../redux/userAisle';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';
import './login.css';



class Login extends Component{
    constructor(){
        super();

        this.state={
            username: '',
            password: ''
        }
    }
handleChange(event){
  this.setState({[event.target.name]: event.target.value
})}


    render(){
        console.log('what is on Login', this.state)
        console.log('LOGIN PROPS', this.props)
        const {username, password}= this.state;

        return (<div className=' login'>
            <div class="loginPage">
                <div class="text1 loginBox">
        <h1>Username:</h1>
        <input onChange={(event) => this.handleChange(event)} value={username} name='username'/>
        <h1>Password:</h1>
        <input  type= 'password' onChange={(event) => this.handleChange(event)} value={password} name='password'/>
        <div >
        <button className='btn' onClick={() => this.props.loginUser(username, password, this.props.history)} >Login</button>
            <Link to='/Register'>
            <button>Register</button>
            </Link>
        </div>        
            </div>
        </div>
    </div>)
}
}

const mapStateToProps= state => state;
export default connect(mapStateToProps, {loginUser}) (Login);