import React, { Component } from 'react';
import {connect} from 'react-redux';
import {registerUser} from './../../redux/userAisle';
import { Link } from 'react-router-dom';
import './register.css';




class Register extends Component {
    constructor(){
        super();

        this.state={
            username: '',
            name: '',
            password: '',
            profile_pic: ''
        }
    }

    handleInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
render(){
    console.log('PROPS in Register', this.props)
    console.log('what is state?', this.state)
 const {username, name, password, profile_pic}=this.state
    return (<div className=' register'>
        <div class="backgroundImg">
            <div class="center registerBox">
        <h1 className='register-title'>CREATE AN ACCOUNT</h1>
        <form  onSubmit={(e)=>e.preventDefault()}>
            <h1>Username:</h1>
            <input onChange={(e)=>this.handleInput(e)} name='username' value={username}/>
            <h1>Name:</h1>
            <input onChange={(e) => this.handleInput(e)} name='name' value={name}/>
            <h1>Password:</h1>
            <input type='password' onChange={(e) => this.handleInput(e)} name='password' value={password}/>
            <h1>Picture:</h1>
            <input onChange={(e) => this.handleInput(e)} name='profile_pic' value={profile_pic}/>
            <br/>
            <button className='registerButton' onClick={() => this.props.registerUser(username, name, password, profile_pic, this.props.history)}>Submit</button>
            <Link to='/'>LogIn</Link>
       
        </form>
            </div>
        </div>
        
    </div>)
    
}
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {registerUser})(Register);