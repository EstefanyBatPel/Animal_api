//instalar jest y supertest npm i jest supertest

//npm install --save-dev jest
//npm install supertest --save-dev


//pegar este codigo en scripts de package.json:
//"test": "node --experimental-vm-modules node_modules/jest/bin/jest.js --watchAll --no-cache --detectOpenHandles",

//npm i cross-env (variables de entorno)

//export app.js

//importamos app y request para crear la constante
import { app } from '../app.js';
import request from 'supertest'
import connection_db from '../database/connection_db.js'; //para borrar los datos de la base de datos _test  cuando terminan los testeos
import AnimalModel from '../models/AnimalModel.js';

const api = request(app); //simulará los test sobre nuestra aplicación

describe('testing CRUD animals', () => {

    
    test('Response body must an array and then show 200 status', async() => { //como las request tienen un await la funcion debe ser asincrona
        const response = await api.get('/api');
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.status).toBe(200);
    });

    //test ejemplo de si la url es erronea que de un status 500

    //  test('Response body must an array and then show 200 status', async() => { //como las request tienen un await la funcion debe ser asincrona
    //      const response = await api.get('/api');
    //      expect(Array.isArray(response.body)).toBe(true); //tal vez esto se deba cambiar a false para que funcione
    //      expect(response.status).toBe(200);
    // });

    test('should create a animal with all fields from the model', async () => {
        const response = await api.post('/api').send({
            "name":"test",
            "image":"http://testing.com",
            "scientificName":"test",
            "photographer":"test",
            "sound":"http://testing.com",
            "description":"test description"
        });
        expect(typeof response.body).toBe('object');
        expect(response.status).toBe(201);
    });

    //para este test creamos una base de datos para test para que la informacion que introduzcamos por aquí no vaya a la api original
    //reactmuseum_test
    //la conectamos en connection.db y .env

     //para borrar los datos de la base de datos _test  cuando terminan los testeos:
     afterAll(async () => {
        await AnimalModel.destroy({ where:{"name": "test"}});
        //await connection_db.end(); // Cerrar la conexión a la base de datos
    });
    

});