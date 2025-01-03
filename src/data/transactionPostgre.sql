BEGIN;

UPDATE users SET balance = balance - 100 WHERE name = 'Alice';
UPDATE users SET balance = balance + 100 WHERE name = 'Bob';

COMMIT;
