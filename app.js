import { PORT } from "./config.js";
import connection_db from "./database/connection_db.js";
import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send('Hola, esta es una Api básica');
});

try {
  await connection_db.authenticate();
  console.log('We are in conection ( /^u^)/ Yipiee!!');
} catch (error) {
  console.error('Oh oh...We have a problem ( ono) error:', error);
}

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});