import e from "express";
import AnimalModel from "../models/AnimalModel.js"


export const getAllAnimals = async (request, response) => {   // request: petición del cliente, response: respuesta del servidor 
    
    try {    /// try: intentar hacer algo, si hay un error, se ejecuta el catch 
        const animals = await AnimalModel.findAll();   // await: esperar a que se ejecute la función, findAll: buscar todos los registros de la tabla animals 
        response.status(200).json(animals);   // status: estado de la respuesta, 200: todo está bien, json: formato de la respuesta
    }
    catch(error){   // catch: si hay un error, hacer algo
        response.status(500).json({message: error.message})    // status: estado de la respuesta, 500: error del servidor, json: formato de la respuesta
    }

}

export const deleteAnimal = async (request, response) => {  // request: petición del cliente, response: respuesta del servidor 
       
    try {
        const { id } = request.params;   /// request.params: parámetros de la petición, id: identificador del animal a eliminar 
        const animal = await AnimalModel.destroy({ where: { id }});     // await: esperar a que se ejecute la función, destroy: eliminar un registro de la tabla animals, where: condición para eliminar el registro
        response.status(200).json(animal);   // status: estado de la respuesta, 200: todo está bien, json: formato de la respuesta
    } 
    catch (error) {  // catch: si hay un error, hacer algo
        response.status(500).json({ message: error.message });
    }
}


export const createAnimal = async (request, response) => {  // request: petición del cliente, response: respuesta del servidor
        
        try {
            const animal = request.body;   // request.body: cuerpo de la petición, animal: datos del animal a crear
            const newAnimal = await AnimalModel.create(animal);   // await: esperar a que se ejecute la función, create: crear un nuevo registro en la tabla animals
            response.status(201).json(newAnimal);   // status: estado de la respuesta, 201: recurso creado, json: formato de la respuesta
        } 
        catch (error) {   // catch: si hay un error, hacer algo
            response.status(500).json({ message: error.message });
        }
    }


export const updateAnimal = async (request, response) => {  // request: petición del cliente, response: respuesta del servidor 
       
        try {
            const { id } = request.params;   // request.params: parámetros de la petición, id: identificador del animal a actualizar
            const animal = request.body;   // request.body: cuerpo de la petición, animal: datos del animal a actualizar
            const updatedAnimal = await AnimalModel.update(animal, { where: { id }});   // await: esperar a que se ejecute la función, update: actualizar un registro de la tabla animals, where: condición para actualizar el registro
            response.status(200).json(updatedAnimal);   // status: estado de la respuesta, 200: todo está bien, json: formato de la respuesta
        } 
        catch (error) {   // catch: si hay un error, hacer algo
            response.status(500).json({ message: error.message });
        }
    }

export const getAnimalById = async (request, response) => {  // request: petición del cliente, response: respuesta del servidor

    try {
        const { id } = request.params;   // request.params: parámetros de la petición, id: identificador del animal a buscar
        const animal = await AnimalModel.findOne({ where: { id }});   // await: esperar a que se ejecute la función, findOne: buscar un registro de la tabla animals, where: condición para buscar el registro
        response.status(200).json(animal);   // status: estado de la respuesta, 200: todo está bien, json: formato de la respuesta
    }
    catch (error) {   // catch: si hay un error, hacer algo
        response.status(500).json({ message: error.message });
    }
}

export const putImage = async (request, response) => {  // request: petición del cliente, response: respuesta del servidor

    try {  
        const { id } = request.params;   // request.params: parámetros de la petición, id: identificador del animal a actualizar
        const image = request.file.filename;   // request.file: archivo de la petición, filename: nombre del archivo
        const updatedAnimal = await AnimalModel.update({ image }, { where: { id }});   // await: esperar a que se ejecute la función, update: actualizar un registro de la tabla animals, where: condición para actualizar el registro
        response.status(200).json(updatedAnimal);   // status: estado de la respuesta, 200: todo está bien, json: formato de la respuesta
    }

    catch (error) {   // catch: si hay un error, hacer algo
        response.status(500).json({ message: error.message });
    }

}

