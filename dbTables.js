/*
Create Tables:

CREATE TABLE users (
    id          SERIAL              PRIMARY KEY,
    firstName   VARCHAR(50)         NOT NULL,
    lastName    VARCHAR(50)         NOT NULL,
    email       VARCHAR(50)         NOT NULL,
    password    TEXT                NOT NULL
);

CREATE TABLE products (
    id          SERIAL              PRIMARY KEY,
    name        VARCHAR(50)         NOT NULL,
    description VARCHAR(100)        NOT NULL,
    price       INT                 NOT NULL,
    currency    VARCHAR(3)          NOT NULL,
    category    VARCHAR(50)         NOT NULL,
    brand       VARCHAR(50)         NOT NULL
);

CREATE TABLE orders (
    id          SERIAL              PRIMARY KEY,
    userId      INT                 NOT NULL,
    total       INT                 NOT NULL,
    status      VARCHAR(50)         NOT NULL,
    created     TIMESTAMPTZ         NOT NULL,
    modified    TIMESTAMPTZ         NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE orderItems (
    id          SERIAL              PRIMARY KEY,
    orderId     INT                 NOT NULL,
    productId   INT                 NOT NULL,
    quantity    INT                 NOT NULL,
    price       INT                 NOT NULL,
    name        VARCHAR(50)         NOT NULL,
    description VARCHAR(100)        NOT NULL,
    created     TIMESTAMPTZ         NOT NULL,
    modified    TIMESTAMPTZ         NOT NULL,
    FOREIGN KEY (orderId) REFERENCES orders(id),
    FOREIGN KEY (productId) REFERENCES products(id)
);

CREATE TABLE carts (
    id           SERIAL             PRIMARY KEY,
    userId       INT                NOT NULL,
    created      TIMESTAMPTZ        NOT NULL,
    modified     TIMESTAMPTZ        NOT NULL,
    FOREIGN KEY (userID) REFERENCES users(id)
);

CREATE TABLE cartItems (
    id          SERIAL              PRIMARY KEY,
    cartId      INT                 NOT NULL,
    productId   INT                 NOT NULL,
    quantity    INT                 NOT NULL,
    created     TIMESTAMPTZ         NOT NULL,
    modified    TIMESTAMPTZ         NOT NULL,
    FOREIGN KEY (cartId) REFERENCES carts(id),
    FOREIGN KEY (productId) REFERENCES products(id)
);
---------------
Insert data:

INSERT INTO users (firstName, lastName, email, password) VALUES ('Anneka', 'Finch', 'afinch@example.com', 'aosjdf0&1'), ('Eden', 'Pritchard', 'epritchard@example.com', 'akjsd7&i'), ('Ash', 'Johnson', 'ajohnson@example.com', 'ks5eimsj$9');

INSERT INTO products (name, description, price, currency, category, brand)
    VALUES 
            ('Blue', 'Blablabla', 20, 'GBP', 'Cushions', 'Ballerine'), ('Green', 'Blagragra', 25, 'GBP', 'Cushions', 'Gallery'), ('Red', 'Blarrarra', 30, 'GBP', 'Cushions', 'Rosily'), 
            ('Yellow', 'Blayyayya', 35, 'GBP', 'Cushions', 'Youngberry'), ('Purple', 'Blaplapla', 40, 'GBP', 'Cushions', 'Prettify'),
            ('Vanilla', 'Blavlavla', 5, 'GBP','Candles', 'Velika'), ('Cinnamon', 'Blaclacla', 6, 'GBP', 'Candles', 'Carolin'), ('Rose', 'Blarrarra', 7, 'GBP', 'Candles', 'Rosily'),
            ('Orange', 'Blaolaola', 8, 'GBP', 'Candles', 'Ovation'), ('Lavender', 'Blallalla', 9, 'GBP', 'Candles', 'Lorelei'),
            ('Lion', 'Blallalla', 10, 'GBP', 'Cups', 'Lorelei'), ('Ladybird', 'Blallalla', 10, 'GBP', 'Cups', 'Lorelei'), ('Penguin', 'Blaplapla', 11, 'GBP', 'Cups', 'Prettify'),
            ('Orca Whale', 'Blaolaola', 12, 'GBP', 'Cups', 'Ovation'), ('Giraffe', 'Blagragra', 15, 'GBP', 'Cups', 'Gallery');

*/