import connection_db from "./database/connection_db.js";

try {
    await connection_db.authenticate();
    console.log('We are in conection ( /^u^)/ Yipiee!!');
  } catch (error) {
    console.error('Oh oh...We have a problem ( ono) error:', error);
  }