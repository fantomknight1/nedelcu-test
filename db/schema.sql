DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS customers CASCADE;

CREATE TABLE users (
  user_id SERIAL UNIQUE PRIMARY KEY,
  email VARCHAR(255),
  password_digest TEXT,
  username VARCHAR(255)
);

CREATE TABLE customers (
  customer_id SERIAL UNIQUE PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(10),
  road VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(2),
  job_type VARCHAR(255),
  job_desc TEXT
);
