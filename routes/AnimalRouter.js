import express from "express";
import { getAllAnimals, updateAnimal, deleteAnimal, getAnimalById, createAnimal } from "../controllers/AnimalController.js"
import { DeleteAnimalValidator, PutAnimalValidator } from "../validators/AnimalValidator.js";

const router = express.Router();

router.get("/", getAllAnimals);

router.get('/:id', getAnimalById);

router.delete("/:id", DeleteAnimalValidator, deleteAnimal);

router.post("/", createAnimal);

router.put("/:id", PutAnimalValidator, updateAnimal)

export default router;