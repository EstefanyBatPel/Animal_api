import { app } from '../app.js';
import request from 'supertest'
import connection_db from '../database/connection_db.js';
import AnimalModel from '../models/AnimalModel.js';
import { Op } from 'sequelize';

const api = request(app);

describe('Testing CRUD animals', () => {

    let createdAnimalTest;
    const animalTestData = {
        "name": "test",
        "image": "http://testing.com",
        "scientificName": "test",
        "photographer": "test",
        "sound": "http://testing.com",
        "description": "testing"
    }

    beforeEach(async () => {
        createdAnimalTest = await api.post('/api').send(animalTestData);
    })

    afterAll(async () => {
        await AnimalModel.destroy({ where: { "name": { [Op.startsWith]: 'test' } } });
        //await AnimalModel.truncate(); // Elimina todas las instancias de animales de la base de datos
        await connection_db.close();
    });

    describe('Testing Get Animals', () => {
        test('Response body must an array and then show 200 status', async () => {
            const response = await api.get('/api');
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body).toHaveLength(1);
            expect(response.status).toBe(200);
        });
    })

    describe('Testing Post - Create Animal', () => {
        test('Should create a animal and return status 201', async () => {
            const response = await api.post('/api').send(animalTestData);
            expect(response.status).toBe(201);
        });
        test('Should create a animal and return an object in response body', async () => {
            const response = await api.post('/api').send(animalTestData);
            expect(typeof response.body).toBe('object');
        });
        test('Should not create an animal if request body is empty and return status 403', async () => {
            const response = await api.post('/api');
            expect(response.status).toBe(403);
        })
    })
    
    describe('Testing Put - Update Animal', () => {

        test('Should update name in an animal and return status 200', async () => {
            animalTestData.name = "test updated"
            const response = await api.put(`/api/${createdAnimalTest.body.id}`).send(animalTestData);
            expect(response.body.name).toBe("test updated")
            expect(response.status).toBe(200);
        })

        test('Should not update an animal and return status 403', async () => {
            const response = await api.put(`/api/${createdAnimalTest.body.id}`).send({
                "name": "test not updated",
            });
            expect(response.status).toBe(403);
        })
    })

    describe('Testing Get One Animal', () => {
        test('Should get one animal and return status 200', async () => {
            const response = await api.get(`/api/${createdAnimalTest.body.id}`);
            expect(response.status).toBe(200);
        })
    });

    describe('Testing delete animal', () => {

        test('Should deleted Animal and return status 200', async () => {
            const response = await api.delete(`/api/${createdAnimalTest.body.id}`);
            expect(response.status).toBe(200);
        })

        test('Should return 500 if attempting to delete a non-existing animal', async () => {
            await api.delete(`/api/${createdAnimalTest.body.id}`);
            const response = await api.delete(`/api/${createdAnimalTest.body.id}`);
            expect(response.status).toBe(403);
        })

    });

});