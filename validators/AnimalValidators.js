import { check, param } from "express-validator";
import AnimalModel from "../models/AnimalModel.js";
import { validateResult } from "../helpers/validateHelpers.js";

export const PutAnimalValidator = [
    check('name')
      .notEmpty().withMessage('El nombre del animal es obligatorio')
      .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),
  
    check('scientificName').isAlpha().withMessage('Deben ser caracteres alfabéticos'),
  
    check('image')
      .notEmpty().withMessage('La imagen es obligatoria')
      .isURL().withMessage('La imagen debe ser una URL válida'),
  
    check('photographer').notEmpty().withMessage('El nombre del fotógrafo es obligatorio'),
  
    check('sound').isURL().withMessage('El sonido debe ser una URL válida'),
  
    check('description')
      .notEmpty().withMessage('La descripción es obligatoria')
      .isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres')
      .isLength({ max: 200 }).withMessage('El nombre debe tener como máximo 200 caracteres'),
  
    (request, response, next) => {
      validateResult(request, response, next);
    }
  ];

export const DeleteAnimalValidator = [
    param("id")
        .exists()
        .notEmpty()
        .custom(async id => {
            const task = await AnimalModel.findByPk(id);
            if (!task) {
                throw new Error('The animal you are trying to delete does not exist');
            }
        }),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]