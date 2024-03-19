# Proyecto Backend

Este proyecto consiste en un backend de una API desarrollada en Node.js utilizando Express, junto con una base de datos MySQL para almacenar y gestionar los datos. Además, se incluyen validaciones de datos utilizando Express-validator y pruebas unitarias con Jest. 

Este archivo README proporciona los pasos necesarios para configurar y ejecutar tanto el backend como el frontend con React.

Este es el repositorio del proyecto backend de la aplicación MUSEUM API. 

Una api en la que podrás hacer CRUD y tener tu propia colección de animales, añadiendo nombre, foto, sonido, descripción de cada animal.

Aquí encontrarás toda la lógica y funcionalidad del lado del servidor.


## Requisitos Previos

- Node.js instalado en tu sistema. Puedes descargarlo desde https://nodejs.org/.
- MySQL Workbench instalado y en funcionamiento en tu sistema. Puedes descargarlo desde https://www.mysql.com/.
- Postman como extensión en VSC, instalado en tu ordenador o desde su web. https://postman.com
- Git instalado en tu sistema. Puedes descargarlo desde https://git-scm.com/.

## Configuración del Backend


1. Navega hasta el directorio del proyecto:

cd tu_proyecto

2. Clona este repositorio en tu máquina local usando Git:


git clone https://github.com/tu_usuario/tu_proyecto.git



## Instalación

1. Clona este repositorio en tu ordenador en local.
2. Navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

npm i

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto.
2. Agrega las siguientes variables de entorno en el archivo `.env`:

DB_DEV_NAME=
DB_TEST_NAME=

DB_USERNAME=
DB_PASSWORD=

PORT=

Crear una Base Datos en MySQL Workbench


## Levantar el backend.

1. Ejecuta el siguiente comando para iniciar el servidor:

   node app.js

2. El servidor estará disponible en el puerto que has elegido en archivo .env


## Herramientas Utilizadas:

Express validator
My SQL Workbench
Postman
Test: con Jest y Supertest 

## Enlace de Postman:

https://documenter.getpostman.com/view/32563788/2sA2xpRUMM



## Bonus: PRIMEROS PASOS PARA UNIR FRONT Y BACK


    1. Clonar repo sin que se cree una CARPETA

    Esto es útil para añadir el frontend dentro del proyecto de back

    git clone url respositorio .


    2. BACKEND

    cambiar url  app.js
    
    npm i    

    node app.js


    3. FRONTEND

    cambiar url animalservices.js

    npm i

    npm run dev

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Crea un fork de este repositorio.
2. Crea una nueva rama con el nombre de tu función o mejora.
3. Realiza los cambios necesarios y realiza un commit.
4. Envía un pull request a la rama principal.


## DESARROLLADORAS DEL PROYECTO
- Scrum Master: [Estefania](https://github.com/EstefanyBatPel)
- Product Owner: [Maria Andrea An] (https://github.com/mariandrean)
- Web developer: [Andrea](https://github.com/Andreamartinn17)
- Web developer: [Fátima](https://github.com/pointfs)
