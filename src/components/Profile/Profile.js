import React, { Component } from 'react';
import {connect} from 'react-redux';
import {goalPost} from './../../redux/userAisle';
import {getTodos} from '../../redux/todoAisle';
import './profile.css';



class Profile extends Component{
    constructor(props){
        super(props);

        this.state={
            mainGoal: this.props.userAisle.user.main_goal || '',
            goal1: this.props.userAisle.user.micro_goal1 || '',
            goal2: this.props.userAisle.user.micro_goal2 || '',
            goal3: this.props.userAisle.user.micro_goal3 || '',
            actionPlan: this.props.userAisle.user.action_plan || ''
        }
    }
    // componentDidMount(){
    // if (this.props.userAisle.user.user_id) {
    //     this.props.goalPost(this.props.userAisle.user.user_id)
    // }
    // }
    // componentDidUpdate(previousProps) {
    //     console.log('PROPS.DATA', previousProps.userAisle.user.user_id, this.props.userAisle.user.user_id)
    //     //  Race Condition between Menu CDM & this component's CDM
    //     if (previousProps.userAisle.user.user_id !== this.props.userAisle.user.user_id) {
    //         this.props.goalPost(this.props.userAisle.user.user_id)
           
    //     }
    // }

   
    changeInput=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    

    render(){
        const { mainGoal, goal1, goal2, goal3, actionPlan}= this.state
        console.log('What is Profile STATE?', this.state)
        console.log('Profile PROPS??', this.props)

        return (<div className='profile'>
            <div class="profileBackground">
            <div class="textBox">
        <div className='profileBox'>
            <h1>Hello {this.props.userAisle.user.name} !</h1>
            {/* <img src={this.props.userAisle.user.profile_pic}/> */}
        </div>
        {/* <nav>
            <Link to='/Menu'>Menu</Link>
            <Link to='/'>Logout</Link>
        </nav> */}
        <section className='profileBox2'>
            <div >
            <h1>What do you want to accomplish in this Bootcamp? <br/>(Main Goal)</h1>
            <input type='text' onChange={(event) => this.changeInput(event)} value={mainGoal} name='mainGoal'></input>
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
            <textarea placeholder='What is your action plan?' onChange={(event) => this.changeInput(event)} value={actionPlan} name='actionPlan'></textarea>
        </div>
        <div>
            
            <button onClick={() => this.props.goalPost(this.props.userAisle.user.user_id, mainGoal, goal1, goal2, goal3, actionPlan, this.props.history)}>Submit</button>
            {/* <button onClick={(event) => this.handleEdit(event)}>Edit</button> */}
        </div>
        </section>
        </div>
        </div>
    </div>)
}
}


const mapStateToProps = state => state;
export default connect(mapStateToProps, { goalPost, getTodos})(Profile);