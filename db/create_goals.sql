INSERT INTO goals
    (author_id, main_goal, micro_goal1, micro_goal2, micro_goal3, action_plan)
VALUES
    ($1, $2, $3, $4, $5, $6);

SELECT *
FROM users
    left JOIN goals ON (goals.author_id = users.user_id )
WHERE  goals.author_id = $1;

