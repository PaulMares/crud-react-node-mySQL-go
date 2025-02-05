FROM mysql:latest

WORKDIR /db

COPY books.sql ./