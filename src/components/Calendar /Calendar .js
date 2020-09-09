import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import {connect} from 'react-redux';
import { getTodosByDate} from '../../redux/todoAisle';

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
            <h1>{todo.todo}</h1>
        </div>
    })
    

    let m = moment(this.state.date).format("M-D-YYYY");
        
    console.log('M?', m)
    console.log('DATE STATE', this.state.date)
    console.log('Calendar PRops',this.props)
    return (<div>
       
     
        <header>
            <h1>What do you want to accomplish in this Bootcamp?</h1>
            <h2>{this.props.userAisle.user.main_goal}</h2>
        </header> 

        <ReactCalendar  onChange={this.onChange}
            onClickDay={this.onClickDay}
            value={this.state.date}
            minDate={new Date()}
            />
        <p>
            Date Choice: {moment(this.state.date).format("M-D-YYYY")}
        </p>
        {mappedDay}

      
    </div>)
}
}



const mapStateToProps = state => state;
export default connect(mapStateToProps, {getTodosByDate})(Calendar);