CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    account_name VARCHAR(100) NOT NULL,
    balance NUMERIC(12, 2) NOT NULL DEFAULT 0.00
);

INSERT INTO accounts (account_name, balance) 
VALUES ('Alice', 1000.00), ('Bob', 500.00);

BEGIN;
UPDATE accounts SET balance = balance - 200 WHERE account_name = 'Alice';
UPDATE accounts SET balance = balance + 200 WHERE account_name = 'Bob';
COMMIT;

SELECT * FROM accounts;
