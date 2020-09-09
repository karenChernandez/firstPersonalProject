DELETE FROM todo
WHERE  todo_id = $1;

SELECT * FROM todo
WHERE author_id= $2;