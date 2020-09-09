import React, { Component } from 'react';
import {connect} from 'react-redux';
import {registerUser} from './../../redux/userAisle';
import { Link } from 'react-router-dom';




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
    return (<div>
        <h1>This is the Register Component</h1>
        <form onSubmit={(e)=>e.preventDefault()}>
            <h1>Username:</h1>
            <input onChange={(e)=>this.handleInput(e)} name='username' value={username}/>
            <h1>Name</h1>
            <input onChange={(e) => this.handleInput(e)} name='name' value={name}/>
            <h1>Password:</h1>
            <input onChange={(e) => this.handleInput(e)} name='password' value={password}/>
            <h1>Picture:</h1>
            <input onChange={(e) => this.handleInput(e)} name='profile_pic' value={profile_pic}/>
            <button onClick={() => this.props.registerUser(username, name, password, profile_pic, this.props.history)}>Submit</button>
            <Link to='/'><button>LogIn</button></Link>
       
        </form>
        
    </div>)
    
}
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {registerUser})(Register);