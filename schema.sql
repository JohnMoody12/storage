CREATE TABLE todolists (
  id serial PRIMARY KEY,
  title text NOT NULL UNIQUE,
  username text NOT NULL
);

CREATE TABLE todos (
  id serial PRIMARY KEY,
  title text NOT NULL,
  done boolean NOT NULL DEFAULT false,
  username text NOT NULL,
  todolist_id integer
    NOT NULL
    REFERENCES todolists (id)
    ON DELETE CASCADE
);

CREATE TABLE users (
  username text PRIMARY KEY,
  password text NOT NULL
);

INSERT INTO users (username, password)
  VALUES ('admin', '$2b$10$uC3lSZqheRZja2B.jBA8q.2s3hkEviwTuRWdw36tngJBkm1i/Llo6'),
         ('developer', 'letmein'),
         ('somebody', 'knock-knock'),
         ('bob', '$2b$10$zbE/8Ezx70/A/dTMZW2SU.VJTByUXqxapZ82EE7LlJv84ylE83nmu');