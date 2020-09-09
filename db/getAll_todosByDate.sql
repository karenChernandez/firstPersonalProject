SELECT *
FROM todo
WHERE author_id = $1 
AND date = $2;