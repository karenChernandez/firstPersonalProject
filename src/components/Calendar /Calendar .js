import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import {connect} from 'react-redux';
import { getTodosByDate} from '../../redux/todoAisle';
import './Calendar.css'

class Calendar extends Component{
constructor(props){
    super(props);


    this.state={
        date: new Date()

    }
}

onChange = date => this.setState({ date });
    
    onClickDay = (day, event) =>{
        console.log('DAY,DATE', day, event.target)
        this.props.getTodosByDate(this.props.userAisle.user.user_id, moment(day).format("M-D-YYYY"));
    } 
        


render(){
    let mappedDay = this.props.todoAisle.post.map(todo=>{
        return <div key={todo.todo_id}>
            <ul className='list'>
            <li>{todo.todo}</li>

            </ul>
        </div>
    })
    

    let m = moment(this.state.date).format("M-D-YYYY");
        
    console.log('M?', m)
    console.log('DATE STATE', this.state.date)
    console.log('Calendar PRops',this.props)
    return (<div className='calendar'>
       
        <div class="calendarImg">
            <div class="text header_title">
        <header className='mainlGoal'>
            <h1>What do you want to accomplish in this Bootcamp?</h1>
            <h2>{this.props.userAisle.user.main_goal}</h2>
        </header> 

    <div className='calendar-todo'>

        <div className='left-box'>

        <ReactCalendar className='calendar' onChange={this.onChange}
            onClickDay={this.onClickDay}
            value={this.state.date}
            minDate={new Date()}
            />
        </div>
       
   
        <div className='right-box'>

        <h2>
            Date Choice: {moment(this.state.date).format("M-D-YYYY")}
        </h2>
        <h1>What do I need todo?</h1>
        {mappedDay}
        </div>
    </div>

        </div>
                
    </div>


    </div>)
}
}



const mapStateToProps = state => state;
export default connect(mapStateToProps, {getTodosByDate})(Calendar);