DROP TABLE IF EXISTS users;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  pass VARCHAR(255) NOT NULL
);




INSERT INTO users (email, pass)
VALUES 
('1234@1234.com', '1234'),
('jeff@jeff.com', 'jeffjeff'),
('supersecure@notsecure.com', 'supersecret');