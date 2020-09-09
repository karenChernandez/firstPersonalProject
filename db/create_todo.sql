INSERT INTO todo
(author_id, todo, date)
VALUES
($1, $2, $3);



SELECT * 
FROM todo
WHERE  author_id = $1;