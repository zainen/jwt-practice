DROP TABLE IF EXISTS users;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) DEFAULT 'member'
);




INSERT INTO users (email, password, role)
VALUES 
('1234@1234.com', '1234', 'member'),
('jeff@jeff.com', 'jeffjeff', 'member'),
('supersecure@notsecure.com', 'supersecret', 'member');