
CREATE DATABASE cowlist;
USE cowlist;

CREATE TABLE cows
(

  id INT
  AUTO_INCREMENT PRIMARY KEY,
name varchar
  (25),
description varchar
  (25)

)

  USE cows;
  INSERT INTO cows
    (name, description)
  VALUES
    ('Buttercup', 'buttercup description');

  INSERT INTO cows
    (name, description)
  VALUES
    ('Daisy', 'Dasiy description');