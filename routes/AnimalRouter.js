import express from "express";
import {getAllAnimals, updatedAnimal, deleteAnimal, getAnimalById, createAnimal} from "../controllers/AnimalController.js"
import { validateCreate } from "../validators/animals.js";

const router = express.Router();

router.get("/", getAllAnimals);

router.get('/:id', getAnimalById);

router.delete("/:id", deleteAnimal);

router.post("/", validateCreate, createAnimal);

router.put("/:id", updatedAnimal)

export default router;