DROP TABLE IF EXISTS users;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);




INSERT INTO users (email, password)
VALUES 
('1234@1234.com', '1234'),
('jeff@jeff.com', 'jeffjeff'),
('supersecure@notsecure.com', 'supersecret');