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

export const deleteAnimal = async (request, response) => {
    
    try {
        const { id } = request.params;
        const animal = await AnimalModel.destroy({ where: { id }});
        response.status(200).json(animal);
    } 
    catch (error) {
        response.status(500).json({ message: error.message });
    }
}



export const createAnimal = async (request, response) => {
    try {
        
        // Crear un nuevo animal utilizando el modelo AnimalModel y los datos proporcionados
        const newAnimal = await AnimalModel.create({
            name:request.body.name,
            scientificName:request.body.scientificName ,
            image:request.body.image,
            photographer: request.body.photographer,
            sound:request.body.sound, 
            description: request.body.description
        });

        // Responder con un estado 201 (Creado) y el nuevo animal creado
        response.status(201).json(newAnimal);
    } catch (error) {
        // Si ocurre algún error, responder con un estado 500 (Error interno del servidor) y un mensaje de error
        response.status(500).json({ message: error.message });
    }
};

