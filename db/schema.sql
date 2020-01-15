DROP DATABASE IF EXISTS burgersdb;
CREATE DATABASE burgersdb;
USE burgersdb;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burgerName VARCHAR(255) NOT NULL,
  devoured BOOLEAN  default false
);