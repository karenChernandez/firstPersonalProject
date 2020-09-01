require('dotenv').config();
const express = require ('express');
const session = require('express-session');
const massive = require('massive');
const app = express();


const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT}= process.env;
const authCtrl= require('./controllers/authController');
// const authController = require('./controllers/authController');
const goalCtrl = require('./controllers/goalCtrl');

app.use(express.json());
app.use(session({
    resave:false,
    saveUninitialized: true,
    cookie:{maxAge: 100 * 60 * 60 * 48},
    secret:SESSION_SECRET
})
);
massive({
    connectionString: CONNECTION_STRING,
    ssl:{
        rejectUnauthorized:false
    }
}).then(db =>{
    app.set('db', db)
    db.init()

    console.log('CONNECTED TO DB!!')
}).catch(err => console.log(err))





app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/profileGoal/post', goalCtrl.post)
//app.put('/profileGoal/edit', goalCtrl)






app.listen(SERVER_PORT, ()=> console.log(`Connected to port${SERVER_PORT}`))
