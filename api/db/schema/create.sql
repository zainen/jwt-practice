DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) DEFAULT 'member'
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  photo_url VARCHAR(255),
  description TEXT,
  price REAL NOT NULL,
  quantity INT,
  owner_id INT NOT NULL
);



INSERT INTO users(email, password, role)
VALUES 
('1234@1234.com', '1234', 'member'),
('jeff@jeff.com', 'jeffjeff', 'member'),
('supersecure@notsecure.com', 'supersecret', 'member');


INSERT INTO products (name, photo_url, description, price, quantity, owner_id)
VALUES
('lamp', 'https://i.imgur.com/YwRiA2j.jpg', 'I LOVE LAMP', 24.24, 100, 1),
('weird lamp', 'https://i.imgur.com/ciQTbLJ.jpg', 'interesting....', 50.50, 20, 2),
('hat', 'https://i.imgur.com/GuPonJS.jpg', 'Santas favouite', 5.00, 20, 1),
('sad car', 'https://i.imgur.com/fxzyWTi.jpg', 'looks a little down', 1000.00, 1, 3),
('Nice cat', 'https://i.imgur.com/wYTCtRu.jpg', 'The nicest of cats', 200.00, 1, 1),
('Awkward Spoons', 'https://i.imgur.com/Zyfkk7B.jpeg', 'Not super comfy in the hands but look good!', 50.00, 30, 2),
('Game of Codes', 'https://i.imgur.com/E7gNfYa.jpg', 'I wonder why my e key is stuck', 100.00, 1, 1),
('Zelda', 'https://i.imgur.com/HPEwq3C.jpg', 'Tri-Force', 49.99, 5, 1);