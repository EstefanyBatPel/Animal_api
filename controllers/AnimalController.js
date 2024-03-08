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