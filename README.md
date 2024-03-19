# Proyecto Backend

Este proyecto consiste en un backend de una API desarrollada en Node.js utilizando Express, junto con una base de datos MySQL para almacenar y gestionar los datos. Además, se incluyen validaciones de datos utilizando Express-validator y pruebas unitarias con Jest. 

Este archivo README proporciona los pasos necesarios para configurar y ejecutar tanto el backend como el frontend con React.

Este es el repositorio del proyecto backend de la aplicación REACT MUSEUM API. 

Una api en la que podrás hacer CRUD y tener tu propia colección de animales, añadiendo nombre, foto, sonido, descripción de cada animal.

Aquí encontrarás toda la lógica y funcionalidad del lado del servidor.


## Requisitos Previos

- Node.js instalado en tu sistema. Puedes descargarlo desde https://nodejs.org/.
- MySQL Workbench instalado y en funcionamiento en tu sistema. Puedes descargarlo desde https://www.mysql.com/.
- Postman como extensión en VSC, instalado en tu ordenador o desde su web. https://postman.com
- Git instalado en tu sistema. Puedes descargarlo desde https://git-scm.com/.

## Instalación

1. Clona este repositorio en tu ordenador:

```sh

git clone https://github.com/EstefanyBatPel/Animal_api.git

```

2. Navega hasta el directorio del proyecto.
   
4. Ejecuta el siguiente comando para instalar las dependencias:

```sh

npm i

```

## Configuración

1. Haz una copia del archivo `.env_example` y renombrarlo a `.env` en la raíz del proyecto.
2. Agrega los valores de las variables de entorno en el archivo `.env` según tu configuración.
3. Crea una base de datos en MySQL Workbench con el nombre que le asignaste a la variable DB_DEV_NAME.

## Levantar el servidor de la API

1. Ejecuta el siguiente comando en la terminal para iniciar el servidor:

```sh

node app.js

```

El servidor estará disponible en el puerto que has elegido en archivo `.env` o en el puerto 5000 si no le haz asignado ningún valor a PORT.

## Documentación de rutas en Postman:

https://documenter.getpostman.com/view/32563788/2sA2xpRUMM

## Tecnologías:

![My Skills](https://skillicons.dev/icons?i=js,express,sequelize,nodejs,npm,git,github,mysql,jest,vscode,postman)


## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Crea un fork de este repositorio.
2. Crea una nueva rama con el nombre de tu función o mejora.
3. Realiza los cambios necesarios y realiza un commit.
4. Envía un pull request a la rama principal.


## DESARROLLADORAS DEL PROYECTO
- Scrum Master: [Estefania](https://github.com/EstefanyBatPel)
- Product Owner: [Maria](https://github.com/mariandrean)
- Web developer: [Andrea](https://github.com/Andreamartinn17)
- Web developer: [Fátima](https://github.com/pointfs)
