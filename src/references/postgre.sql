CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    amount DECIMAL(10, 2)
);

SELECT users.name, orders.amount 
FROM users
JOIN orders ON users.id = orders.user_id;
