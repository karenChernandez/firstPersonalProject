import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newTodo, getTodos, deleteTodo, getTodosByDate } from '../../redux/todoAisle';
import moment from 'moment';
import './todoList.css';

// import { Link } from 'react-router-dom';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: "",
            date: new Date()

        }
    }
    componentDidMount() {
        
        console.log('CDM', this.props)
        //user_id is used to fetch because author_id does not exist at this moment(no todos)
        if (this.props.userAisle.user.user_id) {
            // this.props.getTodos(this.props.userAisle.user.user_id)
            this.props.getTodosByDate(this.props.userAisle.user.user_id, moment().format("M-D-YYYY"))
        }
    }
     componentDidUpdate(previousProps) {
         console.log('PROPS.DATA', previousProps.userAisle.user.user_id, this.props.userAisle.user.user_id)
         if (previousProps.userAisle.user.user_id !== this.props.userAisle.user.user_id) {
            this.props.getTodosByDate(this.props.userAisle.user.user_id, moment().format("M-D-YYYY"))
            //  this.props.getTodos(this.props.userAisle.user.user_id)
            // this.setState({todo:this.props.data})
         }
     }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleDate = date => this.setState({ date:date.target.value });

    render() {
        const { todo } = this.state
        console.log('TODO PROPS?', this.props)
        console.log('state?', this.state)
        //console.log("TodoList -> render -> this.props.userAisle.user", this.props.userAisle.user)
        // const {todo, todo_id}= this.props
        let mappedTodo = this.props.todoAisle.post.map(todo => {
            //console.log('WHAT IS TODO?', todo)
            return <div className='checkBox-todo' key={todo.todo_id}>
                <input type="checkbox" onClick={() => this.props.deleteTodo(todo.todo_id, todo.author_id)} />
                <div className='todo'>{todo.todo}</div>
            </div>
        })
       
        return (<div class="todoList">
            
            <div class="image-todo">
                <div class="text">
                    
                 <header className='mainGoal'>
                <h1 className='header_title'>What do you want to accomplish in this Bootcamp?</h1>
                <h2>{this.props.userAisle.user.main_goal}</h2>
            </header>
          
        <form className='todoCheckList' onSubmit={e => e.preventDefault()}>

            <h1 className='title'>My Todo List:</h1>
            <input type='date'
                // min='today'
                    onChange={this.handleDate}/>

            {this.props.userAisle.user.user_id ? (
                <div >
                    
                    <input placeholder='Todo' onChange={this.handleChange} value={todo} name='todo'></input>
                    <button className='todoButton' onClick={() => this.props.newTodo(this.props.userAisle.user.user_id, todo, this.state.date)}>Submit</button>
                </div>
            ) : null}
        </form>
            {mappedTodo}

           
                </div>
        </div>
            </div>)
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, { newTodo, getTodos, deleteTodo, getTodosByDate })(TodoList);