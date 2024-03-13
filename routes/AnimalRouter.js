import express from "express";
import {getAllAnimals, updatedAnimal, deleteAnimal, getAnimalById, createAnimal} from "../controllers/AnimalController.js"
import { validateCreate, validateGet } from "../validators/animals.js";

const router = express.Router();

router.get("/", validateGet, getAllAnimals);

router.get('/:id', getAnimalById);

router.delete("/:id", deleteAnimal);

router.post("/", validateCreate, createAnimal);

router.put("/:id", updatedAnimal)

export default router;