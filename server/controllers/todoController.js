

module.exports={
    post: (req, res)=>{
        const db = req.app.get('db');
        console.log('Goal Post BODY!', req.body);
        const { user_id, todo, date}=req.body
        db.create_todo([user_id, todo, date]).then(post=>{
            return res.status(200).send(post)
        })
    },
    getPost:(req, res)=>{
        const db = req.app.get('db');
        console.log('REQ PARAMS?', req.params)
        const {author_id}= req.params
        console.log("author_id", author_id)
        db.getAll_todos([author_id]).then(post=>{
            console.log('POST?', post)
            return res.status(200).send(post)
        })
    },
    deleteTodo:(req, res)=>{
        const db = req.app.get('db');
        console.log('what is req.params', req.params)
        const { todo_id, author_id}= req.params
        db.delete_todo([todo_id, author_id]).then(todo=> res.send(todo))
          
    },
    todosByDate:(req, res)=>{
        const db = req.app.get('db');
        console.log('req.params todoByDate', req.params)
        const {author_id, date} = req.params
        db.getAll_todosByDate([author_id, date]).then(post=>{
            
            return res.status(200).send(post)
        })
        
    }
}