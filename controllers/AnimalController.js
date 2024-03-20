import AnimalModel from "../models/AnimalModel.js"

export const getAllAnimals = async (request, response) => {
    try {
        const animals = await AnimalModel.findAll();
        response.status(200).json(animals);
    }
    catch (error) { 
        response.status(500).json({ message: error.message })
    }
}

export const getAnimalById = async (request, response) => {
    const { id } = request.params;
    try {
        const animal = await AnimalModel.findOne({ where: { id } });
        if (!animal) {
            return response.status(404).json({ message: "Animal not found" });
        }
        response.status(200).json(animal);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

export const deleteAnimal = async (request, response) => {
    try {
        const animal = await AnimalModel.findOne({ where: { id: request.params.id } })
        await AnimalModel.destroy({ where: { id: request.params.id } });
        response.status(200).json(animal);
    }
    catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const createAnimal = async (request, response) => {
    try {
        const newAnimal = await AnimalModel.create(request.body);
        response.status(201).json(newAnimal);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

export const updateAnimal = async (request, response) => {
    try {
        const { id } = request.params;
        const animal = await AnimalModel.update(request.body, { where: { id } });
        if (animal[0] === 1) {
            const updatedAnimal = await AnimalModel.findOne({ where: { id } })
            response.status(200).json(updatedAnimal);
        } else {
            response.status(404).json({ message: "No hay cambios para actualizar" });
        }
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}