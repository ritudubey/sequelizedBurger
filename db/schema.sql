create database burgers_db
use burgers_db
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	created_at  datetime,
    PRIMARY KEY (id)
);
