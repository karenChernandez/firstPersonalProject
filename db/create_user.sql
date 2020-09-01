INSERT INTO users (username, name, password, profile_pic)
VALUES
($1, $2, $3, $4)
RETURNING *;

