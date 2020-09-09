import Axios from 'axios';
import moment from 'moment';


const initialState = {
    post: []
}


//ACTION TYPE
const NEW_TODO= 'NEW_TODO';
const GET_TODO= 'GET_TODO';
const DELETE_TODO= 'DELETE_TODO';
const DATE_TODO = 'DATE_TODO'





//ACTION CREATOR
export function getTodosByDate(author_id, date){
    return{
        type: DATE_TODO, 
        payload: Axios.get(`/todo/todoByDate/${author_id}/${date}`).then(res=>{
            console.log('GETtodo data', res.data)
            return res.data})
    }
}
export function newTodo(user_id, todo, date){
    console.log('Action Creator', user_id )
return{
    type: 'NEW_TODO',
    payload: Axios.post(`/todo/newTodo`,{
        user_id,
        todo,
        date: moment(date).format("M-D-YYYY")
    }).then(res=> res.data)

}
}

export function getTodos(user_id){
 console.log('sfewsfr', user_id )
    return{
        type: GET_TODO,
        payload: Axios.get(`/todo/todoPosts/${user_id}`).then(res=>res.data)
        // payload: ["hello?"]
    }
}

export function deleteTodo(todo_id, author_id){
    return{
        type:'DELETE_TODO',
        payload: Axios.delete(`/todo/deleteTodo/${todo_id}/${author_id}`).then(res=>res.data)
    }
}

//REDUCER FUNCTION 


export default function (state=initialState, action){
    // console.log("action", action.type, `${GET_TODO}_FULFILLED`)
    switch(action.type){
        case `${NEW_TODO}_FULFILLED`:
            return{...state, post: action.payload}
        // case `${GET_TODO}_PENDING`:
        //     return state
        case GET_TODO:
            return { ...state, post: action.payload }
        case `${GET_TODO}_FULFILLED`:
            console.log("action", action)
            return{...state, post: action.payload}
        case `${DELETE_TODO}_FULFILLED`:
            return{...state, post: action.payload}
        case `${DATE_TODO}_FULFILLED`:
            return{...state, post: action.payload}
        default:
            return state
    }
}


