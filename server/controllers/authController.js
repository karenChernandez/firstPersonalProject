const bcrypt = require('bcrypt');

module.exports={
    register: async (req, res)=>{
        const db = req.app.get('db');
        console.log('BODY!!', req.body)
        const {username, name, password, profile_pic}= req.body;
        const existingUser= await db.check_user(username)
        if(existingUser[0]){
            return res.status(409).send('Incorrect credentials')
        }
        const salt= bcrypt.genSaltSync(10);
        console.log('SALT', salt)
        const hash= bcrypt.hashSync(password, salt)
        console.log('HASH?', hash)
        const newUser = await db.create_user([username, name, hash, profile_pic])

        req.session.user={
            userId: newUser[0].user_id,
            username: newUser[0].username,
            name: newUser[0].name,
            profile_pic: newUser[0].profile_pic,
            // goals: {
                mainGoal: newUser[0].main_goal,
                micro_goal1: newUser[0].micro_goal1,
                microGoal2: newUser[0].micro_goal2,
                microGoal3: newUser[0].micro_goal3,
                actionPlan: newUser[0].action_plan
            // }
                }
                res.status(200).send(req.session.user)
            },
        login: async (req, res) => {
            const db = req.app.get('db');
            const {username, password} =req.body;
            console.log("username", username)
            const user= await db.check_user(username);
            console.log("user", user)
            
            if(!user[0]){
                return res.status(401).send('Incorrect credentials');

            }else {
                const authenticated = bcrypt.compareSync(password, user[0].password);
                if(authenticated){
                    req.session.user ={
                        userId: user[0].user_id,
                        username: user[0].username,
                        name: user[0].name,
                        profile_pic: user[0].profile_pic,
                        // goals:{
                            mainGoal: user[0].main_goal,
                            micro_goal1: user[0].micro_goal1,
                            microGoal2: user[0].micro_goal2,
                            microGoal3: user[0].micro_goal3,
                            actionPlan: user[0].action_plan
                        // }
                    }
                    res.status(200).send(req.session.user)

                } else{
                    res.status(403).send('Username or password incorrect')
                }
            }
        },
        logout:(req, res)=>{
            req.session.destroy();
            res.status(200);
        }
}
    
    
    