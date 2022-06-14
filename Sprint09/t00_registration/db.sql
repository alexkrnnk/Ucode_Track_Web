use ucode_web;

CREATE TABLE users (
    id INT(6) PRIMARY KEY AUTO_INCREMENT,
    login VARCHAR(20) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(30) NOT NULL UNIQUE
);