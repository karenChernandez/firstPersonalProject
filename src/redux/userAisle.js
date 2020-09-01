import axios from 'axios';



const initialState={
    user:{}
}

//ACTION TYPE

const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
// *****
const GOAL_POST = 'GOAL_POST';



//ACTION CREATOR

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
            history.push('/Menu')
           return res.data
        })
    }
}


export function logOut(history){
    history.push('/')
    
    return{
        type: LOGOUT_USER,
        payload: initialState
        
    }
}


// **************************************GOALS!!
export function goalPost(userId, mainGoal, goal1, goal2, goal3, actionPlan) {
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
        case `${LOGOUT_USER}_FULFILLED`:
            return {...state, ...action.payload}   
        case `${GOAL_POST}_FULFILLED`:
            return {...state, user: action.payload} 
    
            default:
                return initialState
        }
}