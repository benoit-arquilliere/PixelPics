# Docker SQL 
## Dans un terminal:
```bash
docker pull postgres
docker run --name psql -e POSTGRES_PASSWORD=password -p 5432:5432 postgres
docker exec -it psql bash
```
## Dans le conteneur :
```bash
su postgres
psql
```
## Dans psql :
```sql
CREATE DATABASE bdd;
\c bdd;
CREATE TABLE roles (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL);
CREATE TABLE users (id SERIAL PRIMARY KEY, username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, role_id INTEGER NOT NULL, FOREIGN KEY (role_id) REFERENCES roles (id));
INSERT INTO roles (name) VALUES ('admin');
INSERT INTO roles (name) VALUES ('user');
INSERT INTO users (username, password, role_id) VALUES ('admin', 'password', 1);
INSERT INTO users (username, password, role_id) VALUES ('user', 'password', 2);
```