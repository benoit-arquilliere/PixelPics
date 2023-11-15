# PixelPics

Le projet est divisé en trois parties principales : le frontend, l'API et le serveur Socket.io.


## Frontend
Le frontend de l'application est développé en utilisant Vue.js, un framework JavaScript progressif.  
Il permet aux utilisateurs de visualiser la toile pixelisée, de sélectionner des couleurs et de placer des pixels en temps réel.  

### Configuration du Projet Frontend
Assurez-vous d'avoir Node.js et npm installés sur votre machine.  
Installez Vue CLI globalement en utilisant la commande : ```npm install -g @vue/cli```  
Dans le répertoire "frontend", exécutez ```npm install``` pour installer les dépendances du projet.  

### Développement du Frontend
Pour lancer le serveur de développement en mode de rechargement à chaud, utilisez : ```npm run serve```  
Vous pouvez personnaliser la configuration du projet en modifiant le fichier vue.config.js.  
Lintez et corrigez les fichiers en utilisant : ```npm run lint```  
Pour plus de détails sur la configuration du projet Vue.js, consultez la Référence de Configuration.  


## API
L'API backend gère l'authentification des utilisateurs, la gestion des comptes et les interactions avec la base de données SQL pour stocker les informations des utilisateurs.  

### Configuration du Projet API
Assurez-vous d'avoir Node.js et npm installés sur votre machine.  
Dans le répertoire "api", exécutez ```npm install``` pour installer les dépendances du projet.  

### Développement de l'API
Pour lancer le backend API, utilisez : ```npm start```  
Les routes de l'API peuvent être configurées dans le fichier "api.js".  


## Serveur Socket.io
Le serveur Socket.io gère la communication en temps réel entre les utilisateurs, permettant de placer des pixels sur la toile pixelisée et de voir les actions des autres utilisateurs en temps réel.  

### Configuration du Serveur Socket.io
Assurez-vous d'avoir Node.js et npm installés sur votre machine.  
Dans le répertoire "server", exécutez ```npm install``` pour installer les dépendances du projet. 

### Développement du Serveur Socket.io  
Pour lancer le serveur Socket.io, utilisez : ```npm start```  
La configuration de Socket.io peut être réalisée dans le fichier "server.js".  

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