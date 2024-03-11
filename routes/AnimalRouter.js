import express from "express";
import {getAllAnimals} from "../controllers/AnimalController.js"
import { deleteAnimal } from "../controllers/AnimalController.js"
import { createAnimal } from "../controllers/AnimalController.js"
import { getAnimalById } from "../controllers/AnimalController.js";

const router = express.Router();

router.get("/", getAllAnimals);

router.get('/:id', getAnimalById);

router.delete("/:id", deleteAnimal);

router.post("/", createAnimal);

export default router;