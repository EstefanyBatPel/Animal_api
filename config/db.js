//instalamos moongose npm i mongoose --save y lo importamos
import mongoose from "mongoose";

const DB_URI = 'mongodb://localhost:27017'; // url de mongo

const initDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log('Conexión realizada');
    } catch (error) {
        console.error('DB: ERROR', error);
    }
};

export default initDB;
//Ahora lo conectamos en app.js




/////////////////////////////////Manera antigua (documentacion)//////////////////////////////////

//  module.exports = () => {
//      const connect = () => {
//          mongoose.connect(
//              DB_URI,
//              {
//                  //configuraciones para tener una mejor conexion
//                  keepAlive: true,
//                  useNewUrlParser: true,
//                  useUnifiedTopology: true
//              },
//              (error) => {
//                  if(error){
//                     console.log('DB: ERROR');
//                  }else{
//                      console.log('Conexion realizada');
//                 }
//              })
//         }

//      connect();
//  }