import { check, param } from "express-validator";
import AnimalModel from "../models/AnimalModel.js";
import { validateResult } from "../helpers/validateHelper.js";

export const validateCreateAnimal = [
  check('name')
      .exists()
      .notEmpty(),

  check('scientificName')
      .exists()
      .notEmpty(),

  check('photographer')
      .exists()
      .notEmpty(),

  check('image')
      .exists()
      .notEmpty(),

  check('sound')
      .exists()
      .notEmpty(),

  check('description')
      .exists()
      .notEmpty()
      .isLength({ min: 5 }).withMessage('The description must be at least 5 characters'),

  (req, res, next) => {
      validateResult(req, res, next)
  }
];

export const validateUpdateAnimal = [
    check('name')
      .notEmpty().withMessage('The name of the animal is required')
      .isLength({ min: 5 }).withMessage('The name must be at least 5 characters'),
  
    check('scientificName').isAlpha().withMessage('They must be alphabetical characters'),
  
    check('image')
      .notEmpty().withMessage('The image is required')
      .isURL().withMessage('Image must be a valid URL'),
  
    check('photographer').notEmpty().withMessage('The photographer is required'),
  
    check('sound').isURL().withMessage('Sound must be a valid URL'),
  
    check('description')
      .notEmpty().withMessage('Description is required')
      .isLength({ min: 20 }).withMessage('Description must be at least 20 characters')
      .isLength({ max: 200 }).withMessage('The name must have a maximum of 200 characters'),
  
    (request, response, next) => {
      validateResult(request, response, next);
    }
  ];

export const validateDeleteAnimal = [
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