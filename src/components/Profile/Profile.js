import React, { Component } from 'react';
import {connect} from 'react-redux';
import {goalPost} from './../../redux/userAisle';
import { Link } from 'react-router-dom';


class Profile extends Component{
    constructor(){
        super();

        this.state={
            mainGoal: '',
            goal1: '',
            goal2: '',
            goal3: '',
            actionPlan: ''
        }
    }



    changeInput=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    

    render(){
        const { mainGoal, goal1, goal2, goal3, actionPlan}= this.state
        console.log('What is Profile STATE?', this.state)
        console.log('PROPS??', this.props)

    return (<div>
        <nav>
            <Link to='/Menu'>Menu</Link>
            <Link to='/'>Logout</Link>
        </nav>
        <div>
            <h1>What do you want to accomplish in this Bootcamp?(Main Goal)</h1>
            <input onChange={(event) => this.changeInput(event)} value={mainGoal} name='mainGoal'></input>
            {/* <Link to='/Profile'>
                <button>Submit</button>
            </Link>
            <Link to='/Goal'><button>Edit</button></Link> */}
        </div>

        <h1>What are your 3 micro-goals?</h1>
        <div>
            <li>
                <input placeholder='Micro Goal #1' onChange={(event)=>this.changeInput(event)} value={goal1} name='goal1'/>
            </li>

            <li>
                <input placeholder='Micro Goal #2' onChange={(event) => this.changeInput(event)} value={goal2} name='goal2'/>
            </li>

            <li>
                <input placeholder='Micro Goal #3' onChange={(event) => this.changeInput(event)} value={goal3} name='goal3'/>
            </li>

        </div>

        <div>
            <h1>Action Plan:</h1>
            <input onChange={(event) => this.changeInput(event)} value={actionPlan} name='actionPlan'></input>
        </div>
        <div>
            
            <button onClick={() => this.props.goalPost(this.props.userAisle.user.userId, mainGoal, goal1, goal2, goal3, actionPlan)}>Submit</button>
            <button onClick={(event) => this.handleEdit(event)}>Edit</button>
        </div>
    </div>)
}
}


const mapStateToProps = state => state;
export default connect(mapStateToProps, {goalPost})(Profile);