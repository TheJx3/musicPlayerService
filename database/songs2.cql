CREATE KEYSPACE soundofcloud2 WITH replication={'class':'SimpleStrategy','replication_factor':3};

CREATE TABLE soundofcloud2.songs (
id int,
title VARCHAR, 
artist VARCHAR, 
genre VARCHAR,
album VARCHAR,
albumart VARCHAR,
songfile VARCHAR, 
createdat BIGINT, 
primary key(genre, id)
);

-- CREATE TABLE song_count (
--   song_id BIGINT,
--   downcount counter,
--   upcount counter,
--   PRIMARY KEY (song_id)
-- )

CREATE index idx_id ON soundofcloud2.songs(id);