import express from "express";
import { getAllAnimals, updateAnimal, deleteAnimal, getAnimalById, createAnimal } from "../controllers/AnimalController.js"
import { validateCreateAnimal, validateDeleteAnimal, validateUpdateAnimal } from "../validators/AnimalValidators.js";

const router = express.Router();

router.get("/", getAllAnimals);

router.get('/:id', getAnimalById);

router.delete("/:id", validateDeleteAnimal, deleteAnimal);

router.post("/", validateCreateAnimal, createAnimal);

router.put("/:id", validateUpdateAnimal, updateAnimal)

export default router;