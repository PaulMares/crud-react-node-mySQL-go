CREATE DATABASE IF NOT EXISTS test;
use test;

DROP TABLE IF EXISTS books;

CREATE TABLE books (
	id int NOT NULL,
	title varchar(255) NOT NULL,
	description varchar(4096) NOT NULL,
	cover varchar(256),
	price int NOT NULL
);