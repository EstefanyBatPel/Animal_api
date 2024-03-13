//instalar jest y supertest npm i jest supertest

//npm install --save-dev jest
//npm install supertest --save-dev


//pegar este codigo en scripts de package.json:
//"test": "node --experimental-vm-modules node_modules/jest/bin/jest.js --watchAll --no-cache --detectOpenHandles",

//npm i cross-env (variables de entorno)

//export app.js

//importamos app y request para crear la constante
import { app } from '../app';
import request from 'supertest'

const api = request(app); //simulará los test sobre nuestra aplicación

describe('testing CRUD scuptures', () => {
    test('Response body must an array and then show 200 status', async() => { //como las request tienen un await la funcion debe ser asincrona
        const response = await api.get('/api');
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.status).toBe(200);
    });

    //test ejemplo de si la url es erronea que de un status 500

    // test('Response body must an array and then show 200 status', async() => { //como las request tienen un await la funcion debe ser asincrona
    //     const response = await api.get('/hola');
    //     expect(Array.isArray(response.body)).toBe(true); //tal vez esto se deba cambiar a false para que funcione
    //     expect(response.status).toBe(500);
    // });
})