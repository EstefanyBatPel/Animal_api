///este archivo conecta con mi db y me permite hacer consultas a la db

import { Sequelize } from "sequelize";  // Importar el módulo de sequelize
import { DB_NAME_DEV, DB_PASSWORD, DB_USERNAME, DB_TEST, NODE_ENV } from "../config.js";  // Importar las variables de entorno, para no exponerlas en el código

const DB_NAME = NODE_ENV === 'test' ? DB_TEST : DB_NAME_DEV;  // Si estamos en entorno de test, usamos la base de datos de test, si no, usamos la base de datos de desarrollo

const connection_db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {  // Crear la conexión a la base de datos
  host: 'localhost',
  dialect: "mysql"
});

export default connection_db;


//seqilized conectarnos y hacer consultas a la db