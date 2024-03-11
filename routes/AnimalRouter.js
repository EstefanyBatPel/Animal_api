import express from "express";
import {getAllAnimals, deleteAnimal, createAnimal, updateAnimal, getAnimalById} from "../controllers/AnimalController.js"



const router = express.Router();

router.get("/", getAllAnimals);

router.delete("/:id", deleteAnimal);

router.post("/", createAnimal);

router.put("/:id", updateAnimal);

router.get("/:id", getAnimalById);  

export default router;