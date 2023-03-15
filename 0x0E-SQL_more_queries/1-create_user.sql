-- Script that creates an user in MySQL server
-- Query to create the user 'user_0d_1' in MySQL server
CREATE USER IF NOT EXISTS 'user_0d_1'@'localhost';
GRANT ALL PRIVILEGES ON * . * TO 'user_0d_1'@'localhost' IDENTIFIED WITH authentication_plugin 'user_0d_1_pwd';
