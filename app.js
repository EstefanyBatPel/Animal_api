import { PORT } from "./config.js";
import connection_db from "./database/connection_db.js";
import express from "express";
import AnimalRouter from "./routes/AnimalRouter.js"

const app = express();

app.use("/api", AnimalRouter)

try {
  await connection_db.authenticate();
  console.log('We are in conection ( /^u^)/ Yipiee!!');
} catch (error) {
  console.error('Oh oh...We have a problem ( ono) error:', error);
}

app.listen(PORT, () => {
  console.log(`Server up in http://localhost:${PORT}/api`);
});