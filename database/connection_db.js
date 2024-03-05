import { Sequelize } from "sequelize";
import 'dotenv/config';

const connection_db = new Sequelize(process.env.DATABASE, process.env.USER_NAME,  process.env.SECRET_KEY, {
    host: 'localhost',
   dialect: "mysql"
  });

export default connection_db;