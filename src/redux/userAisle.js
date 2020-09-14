import axios from 'axios';



const initialState={
    user:{}
}

//ACTION TYPE

const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_USER= 'GET_USER';
// *****
const GOAL_POST = 'GOAL_POST';

//*****
// const TODO_POST = 'TODO_POST';



//ACTION CREATOR
export function getUser(){
    return{
        type: GET_USER,
        payload: axios.get('/user').then((res)=>{
            return res.data
            })
    }

}

export function registerUser(username, name, password, profile_pic, history){
    console.log('username, name, password, profile_user', username, name, password, profile_pic, history)
    return{
        type:REGISTER_USER,
        payload: axios.post('/auth/register', {
            username,
            name,
            password,
            profile_pic
        }).then((res)=>{
            history.push('/Profile')
           return res.data
        })
    }
}
 
export function loginUser(username, password, history){
    return{
        type: LOGIN_USER,
        payload: axios.post('/auth/login', {
            username,
            password
        }).then((res) => {
            history.push('/TodoList')
            console.log("RES>DATA", res.data)
           return res.data
        })
    }
}


export function logOut(history){
    
    
    return{
        type: LOGOUT_USER,
        payload: initialState
        // localStorage.clear('token');
        // this.props.history.push('/LogOut');
        
    }
}
// *******************************TO_DO
// export function createTodo(user_id, todo){
//     console.log('TODO?', user_id, todo)
//     return{
//         type: TODO_POST,
//         payload: axios.post('/todo/post',{
//             user_id,
//             todo
//         }).then((res)=>{
//             return res.data
//         })
//     }
// }


// **************************************GOALS!!
export function goalPost(userId, mainGoal, goal1, goal2, goal3, actionPlan, history) {
    console.log('mainGoal, goal1, goal2, goal3!!', userId, mainGoal, goal1, goal2, goal3, actionPlan)
    return {
        type: GOAL_POST,
        payload: axios.post('/profileGoal/post', {
            userId,
            mainGoal,
            goal1,
            goal2,
            goal3,
            actionPlan
        }).then(res => {
            console.log("goalPost -> res.data[0]", res.data)
            history.push('/Calendar')
            return res.data[0]


        })
        
        
    }
}







export default function(state=initialState, action){
    switch(action.type){
        case `${REGISTER_USER}_FULFILLED`:
            return {...state, user: action.payload}
        case `${LOGIN_USER}_FULFILLED`:
            return {...state, user: action.payload}
        case 'LOGOUT_USER':
            return initialState   
        case `${GOAL_POST}_FULFILLED`:
            return {...state, user: action.payload}
        case `${GET_USER}_FULFILLED`:
            return {...state, user:action.payload}
    
            default:
                console.log("DEFAULT CASE", action)
                return state
        }
}