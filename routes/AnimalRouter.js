import express from "express";
import {getAllAnimals, updateAnimal, deleteAnimal, getAnimalById, createAnimal} from "../controllers/AnimalController.js"
import { putValidationRules } from "../validation/PutValidator.js";




const router = express.Router();

router.get("/", getAllAnimals);

router.get('/:id', getAnimalById);

router.delete("/:id", deleteAnimal);

router.post("/", createAnimal);

router.put("/:id", putValidationRules, updateAnimal)

export default router;