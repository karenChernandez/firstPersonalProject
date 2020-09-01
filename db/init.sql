CREATE TABLE IF NOT EXISTS users 
(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    name TEXT,
    password TEXT,
    profile_pic TEXT
);
CREATE TABLE IF NOT EXISTS goals
(
    goal_id SERIAL PRIMARY KEY,
    main_goal TEXT,
    micro_goal1 TEXT,
    micro_goal2 TEXT,
    micro_goal3 TEXT,
    action_plan TEXT,
    author_id INT REFERENCES users(user_id)
);