-- SELECT * FROM users
-- WHERE username = $1;

SELECT *
FROM users
    LEFT JOIN goals ON (goals.author_id = users.user_id )
WHERE  users.username = $1;
