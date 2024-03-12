import AnimalModel from "../models/AnimalModel.js"


export const getAllAnimals = async (request, response) => {
    
    try {
        const animals = await AnimalModel.findAll();
        response.status(200).json(animals);
    }
    catch(error){
        response.status(500).json({message: error.message})
    }

}

export const getAnimalById = async (request, response) => {
    const { id } = request.params;
    
    try {
        const animal = await AnimalModel.findOne({ where: { id }});
        if (!animal) { // Si no se encuentra el animal
            return response.status(404).json({ message: "Animal not found" });
        }
        response.status(200).json(animal);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

export const deleteAnimal = async (request, response) => {
    
    try {
        const animal = await AnimalModel.findOne({ where: { id: request.params.id }})        
        await AnimalModel.destroy({ where: { id: request.params.id }});
        response.status(200).json(animal);
    } 
    catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const createAnimal = async (request, response) => {
    try {
        
        // Crear un nuevo animal utilizando el modelo AnimalModel y los datos proporcionados
        const newAnimal = await AnimalModel.create(request.body);

        // Responder con un estado 201 (Creado) y el nuevo animal creado
        response.status(201).json(newAnimal);
    } catch (error) {
        // Si ocurre algún error, responder con un estado 500 (Error interno del servidor) y un mensaje de error
        response.status(500).json({ message: error.message });
    }
};

export const updatedAnimal = async (request, response) => {
    try {
        const { id } = request.params;
        
        // Actualiza el animal y obtén el número de filas actualizadas
        const animal = await AnimalModel.update(request.body, {where: { id }});
        
        // Si se actualizó al menos una fila
        if (animal[0] === 1) {
            // Busca el animal actualizado y devuélvelo
            const updatedAnimal = await AnimalModel.findOne({ where: { id }})
            response.status(200).json(updatedAnimal);
        } else {
            // Si no se actualizó ninguna fila, devuelve un mensaje de error
            response.status(404).json({ message: "No hay cambios para actualizar" });
        }
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}