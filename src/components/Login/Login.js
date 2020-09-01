import React, { Component } from 'react';
import {loginUser} from './../../redux/userAisle';
import {connect} from 'react-redux';


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
        const {username, password}= this.state;
    return (<div>
        <h1>Username:</h1>
        <input onChange={(event) => this.handleChange(event)} value={username} name='username'/>
        <h1>Password:</h1>
        <input onChange={(event) => this.handleChange(event)} value={password} name='password'/>
        <div>
            <button onClick={() => this.props.loginUser(username, password, this.props.history)} >Submit</button>

        </div>        

        
    </div>)
}
}

const mapStateToProps= state => state;
export default connect(mapStateToProps, {loginUser}) (Login);