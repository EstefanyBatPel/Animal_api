import express from "express";
import {getAllAnimals} from "../controllers/AnimalController.js"

const router = express.Router();

router.get("/", getAllAnimals);

export default router;