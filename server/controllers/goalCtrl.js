
module.exports={
    post: (req, res)=>{
        const db = req.app.get('db');
        console.log('Goal Post BODY!', req.body);
        const { userId, mainGoal, goal1, goal2, goal3, actionPlan} = req.body
        db.create_goals([
            userId,
            mainGoal,
            goal1,
            goal2,
            goal3,
            actionPlan]).then(post=>{
                res.status(200).send(post)
            }).catch(err=>{console.log(err)});  

    }
}