import { PORT } from "./config.js";
import connection_db from "./database/connection_db.js";
import express from "express";
import AnimalRouter from "./routes/AnimalRouter.js"

const app = express();
app.use(express.json())  // Middleware para parsear el cuerpo de las peticiones a JSON
app.use("/api", AnimalRouter)  // Montar el enrutador de animales en la ruta /api

try {
  await connection_db.authenticate();
  console.log('We are in conection ( /^u^)/ Yipiee!!');
} catch (error) {
  console.error('Oh oh...We have a problem ( ono) error:', error);
}

app.listen(PORT, () => {
  console.log(`Server up in http://localhost:${PORT}/api`);
});