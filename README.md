Azurian test.

CRUD web app que muestra una lista de contactos por medio de una tabla. Está hecha en Angular 7 con Bootstrap 4 para el diseño.

El servidor tiene dos vertientes, una en NodeJs con express; otra en Java utilizando Spring Boot.

################

Instrucciones:
1) El cliente en angular se encuentra en azurian-test-front. Se debe ubicar dentro del directorio y correr el comando "npm install".

2) El servidor en Nodejs se encuentra en azurian-test-nodejs. Se debe ubicar dentro del directorio y correr el comando "npm install".

3) El servidor en Java posee las dependencias (fue hecho en Spring Tool Suite), por lo que sólo se debe ejecutar la aplicación.

4) La base de datos está hecha en MySQL. El script SQL (azuriantest.sql) se encuentra dentro de la carpeta llamada SQL. El CRUD está desarrollado para trabajar en una base de datos llamada azuriantest, con la tabla contacts, y con el username="root" y password="".

5) Para ejecutar el frontend, ubicados en azurian-test-front desde la consola: "ng serve".

6) Para ejecutar el servidor en Nodejs, ubicados en azurian-test-nodejs desde la consola: "node app.js".