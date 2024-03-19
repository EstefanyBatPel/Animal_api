import { NODE_ENV, PORT } from "./config.js";
import connection_db from "./database/connection_db.js";
import express from "express";
import AnimalRouter from "./routes/AnimalRouter.js"
import chalk from "chalk";
import cors from "cors";

export const app = express();
app.use(cors());
app.use(express.json())  // Middleware para parsear el cuerpo de las peticiones a JSON
app.use("/api", AnimalRouter)  // Montar el enrutador de animales en la ruta /api


try {
  await connection_db.authenticate();
  console.log(chalk.green('We are in conection ( /^u^)/ Yipiee!!\n'));
} catch (error) {
  console.error('Oh oh...We have a problem ( ono) error:', error);
}
if (NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log([
      chalk.bold(`Server started on PORT: ${PORT}`),
      chalk.gray(`➜  http://localhost:${PORT}/api`),
      chalk.gray('Press CTRL-C to stop'),
      ''
    ].join('\n'));
  });
}