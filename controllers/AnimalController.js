import expresss from "express";
import AnimalModel from "../models/AnimalModel.js"
import { check, validationResult } from 'express-validator';
import { putValidationRules } from "../validation/PutValidator.js"; // Asegúrate de que la ruta al archivo es correcta



export const getAllAnimals = async (request, response) => {   // request: petición del cliente, response: respuesta del servidor 
    
    try {    /// try: intentar hacer algo, si hay un error, se ejecuta el catch 
        const animals = await AnimalModel.findAll();   // await: esperar a que se ejecute la función, findAll: buscar todos los registros de la tabla animals 
        response.status(200).json(animals);   // status: estado de la respuesta, 200: todo está bien, json: formato de la respuesta
    }
    catch(error){   // catch: si hay un error, hacer algo
        response.status(500).json({message: error.message})    // status: estado de la respuesta, 500: error del servidor, json: formato de la respuesta
    }

}

export const getAnimalById = async (request, response) => {  
    const { id } = request.params; // Obtener el id del animal de los parámetros de la solicitud (request)
    
    try {
        const animal = await AnimalModel.findOne({ where: { id }});  // Buscar un animal por su id 
        if (!animal) { // Si no se encuentra el animal
            return response.status(404).json({ message: "Animal not found" });
        }
        response.status(200).json(animal); // Si se encuentra el animal, responder con el animal encontrado
    } catch (error) {
        response.status(500).json({ message: error.message }); // Si hay un error, responder con un estado 500 (Error interno del servidor) y un mensaje de error
    }
};

export const deleteAnimal = async (request, response) => {  
    
    try {
        const { id } = request.params;  // Obtener el id del animal de los parámetros de la solicitud (request)
        const animal = await AnimalModel.destroy({ where: { id }}); // Eliminar un animal por su id destroy where id 
        response.status(200).json(animal); // Responder con un estado 200 (Todo está bien) y el número de filas eliminadas
    } 
    catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const createAnimal = async (request, response) => {
    try {
        
        const newAnimal = await AnimalModel.create(request.body);             // Crear un nuevo animal utilizando el modelo AnimalModel y los datos proporcionados

        response.status(201).json(newAnimal);   // Responder con un estado 201 (Creado) y el nuevo animal creado
    } catch (error) {
        
        response.status(500).json({ message: error.message });  // Si ocurre algún error, responder con un estado 500 (Error interno del servidor) y un mensaje de error
    }
};

//Update
// export const updatedAnimal = async (request, response) => {
//     try {

//         const { id } = request.params;
//         const animal = await AnimalModel.update(request.body, {where: { id }});
//         response.status(201).json(animal);

//     } catch (error) {

//         response.status(500).json({ message: error.message });

//     }
// }


//Update modificado para que se muestre el objeto entero


export const updateAnimal = async (request, response) => {

    try {
        const { id } = request.params; // Obtén el id del animal de los parámetros de la solicitud (request)
        
        // Actualiza el animal y obtén el número de filas actualizadas
        const animal = await AnimalModel.update(request.body, {where: { id }});

        
        // Si se actualizó al menos una fila
        if (animal[0] === 1) {
            // Busca el animal actualizado y devuélvelo
            const updatedAnimal = await AnimalModel.findOne({ where: { id }})  //al usar findOne como es una método genérico tenemos que especificar de que dato cogemos de la db, por eso el where:id
            response.status(200).json(updatedAnimal);// Responde con un estado 200 (Todo está bien) y el animal actualizado
        } else {
            // Si no se actualizó ninguna fila, devuelve un mensaje de error
            response.status(404).json({ message: "No hay cambios para actualizar" });
        }
    } catch (error) {
        console.error('Error al crear el animal');// Si hay un error, responde con un estado 500 (Error interno del servidor) y un mensaje de error
        response.status(500).json({ sucess: false, error: 'Error interno del servidor' });// Si hay un error, responde con un estado 500 (Error interno del servidor) y un mensaje de error
    }
}



///findOne y findByPk son dos métodos proporcionados por Sequelize, un ORM para Node.js, para buscar datos en la base de datos.

///findOne: Este método se utiliza para buscar un registro específico que cumple con ciertas condiciones. Puedes pasar un objeto de opciones que define las condiciones de la búsqueda. Si se encuentra un registro que cumple con las condiciones, el método devuelve el registro; de lo contrario, devuelve null.

///findByPk: Este método se utiliza para buscar un registro por su clave primaria. Puedes pasar la clave primaria del registro que deseas buscar. Si se encuentra un registro con la clave primaria proporcionada, el método devuelve el registro; de lo contrario, devuelve null.