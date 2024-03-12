import express, { query } from "express";
import {getAllAnimals, updatedAnimal, deleteAnimal, getAnimalById, createAnimal} from "../controllers/AnimalController.js"
// const {validateCreate} = require('../validators/animals')
import { validateCreate } from "../validators/animals.js";
import {validationResult} from 'express-validator'
import {check} from 'express-validator'

const router = express.Router();

router.get('/',  [
    check('name')
      .isString()
      .withMessage('El nombre debe tener solo letras'),

    check('scientificName')
      .isString()
      .withMessage('El nombre debe tener solo letras'),

    check('photographer')
      .isString()
      .withMessage('El nombre debe tener solo letras'),

    check('image')
      .isString()
      .withMessage('El nombre debe tener solo letras'),

    check('sound')
      .isString()
      .withMessage('El nombre debe tener solo letras'),

    check('description')
      .isString()
      .withMessage('El nombre debe tener solo letras'),
  ],
    (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    getAllAnimals(req, res);
  });

// router.get("/", getAllAnimals);

router.get('/:id', getAnimalById);

router.delete("/:id", deleteAnimal);

router.post("/", validateCreate, createAnimal);

router.put("/:id", updatedAnimal)

export default router;