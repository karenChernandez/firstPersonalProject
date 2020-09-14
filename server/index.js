require('dotenv').config();
const express = require ('express');
const session = require('express-session');
const massive = require('massive');
const app = express();


const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT}= process.env;
const authCtrl= require('./controllers/authController');
const goalCtrl = require('./controllers/goalController');
const todoCtrl = require('./controllers/todoController');


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

app.use(express.static(`${__dirname}/../build`));

//server lisenters 

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/profileGoal/post', goalCtrl.post)
//app.put('/profileGoal/edit', goalCtrl)
// **************
app.post('/todo/newTodo', todoCtrl.post)
app.get('/todo/todoPosts/:author_id', todoCtrl.getPost)
app.get('/user', authCtrl.getUser)
app.delete('/todo/deleteTodo/:todo_id/:author_id', todoCtrl.deleteTodo )
app.get('/todo/todoByDate/:author_id/:date', todoCtrl.todosByDate)



const path = require('path')
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
})
    







app.listen(SERVER_PORT, ()=> console.log(`Connected to port${SERVER_PORT}`))
