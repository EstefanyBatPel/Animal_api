import express from "express";
import {getAllAnimals, updatedAnimal, deleteAnimal, getAnimalById, createAnimal} from "../controllers/AnimalController.js"
import { DeleteAnimalValidator } from "../validators/AnimalValidator.js";

const router = express.Router();

router.get("/", getAllAnimals);

router.get('/:id', getAnimalById);

router.delete("/:id", DeleteAnimalValidator ,deleteAnimal);

router.post("/", createAnimal);

router.put("/:id", updatedAnimal)

export default router;