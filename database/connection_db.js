import { Sequelize } from "sequelize";
import { DB_DEV_NAME, DB_PASSWORD, DB_USERNAME, DB_TEST_NAME, NODE_ENV} from "../config.js";

//Constante para test (NODE_ENV revisa)

const DB_NAME = NODE_ENV === 'test' ? DB_TEST_NAME: DB_DEV_NAME

//Conexion normal

const connection_db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: 'localhost',
  dialect: "mysql"
});

export default connection_db;