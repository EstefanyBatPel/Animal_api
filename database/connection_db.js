///este archivo conecta con mi db y me permite hacer consultas a la db

import { Sequelize } from "sequelize";  // Importar el módulo de sequelize
import { DB_NAME, DB_PASSWORD, DB_USERNAME } from "../config.js";  // Importar las variables de entorno, para no exponerlas en el código

const connection_db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {  // Crear la conexión a la base de datos
  host: 'localhost',
  dialect: "mysql"
});

export default connection_db;


//seqilized conectarnos y hacer consultas a la db