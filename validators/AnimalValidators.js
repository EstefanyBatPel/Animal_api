import { check, param } from "express-validator";
import AnimalModel from "../models/AnimalModel.js";
import { validateResult } from "../helpers/validateHelper.js";

export const validateCreateAnimal = [
    check('name')
        .exists()
        .notEmpty().withMessage('The name of the animal is required')
        .isLength({ min: 1 }).withMessage('The name must be at least 5 characters'),

    check('scientificName')
        .exists()
        .notEmpty()
        .isAlpha().withMessage('They must be alphabetical characters'),

    check('photographer')
        .exists()
        .notEmpty().withMessage('The photographer is required'),

    check('sound')
        .exists()
        .notEmpty().withMessage('Sound is required')
        .isURL().withMessage('Sound must be a valid URL'),

    check('description')
        .exists()
        .notEmpty().withMessage('Description is required')
        .isLength({ min: 5 }).withMessage('The description must be at least 5 characters')
        .isLength({ max: 200 }).withMessage('The name must have a maximum of 200 characters'),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];

export const validateUpdateAnimal = [
    param("id")
        .exists()
        .notEmpty()
        .custom(async id => {
            const task = await AnimalModel.findByPk(id);
            if (!task) {
                throw new Error('The animal you are trying to modify does not exist');
            }
        }),
    check('name')
        .exists()
        .notEmpty().withMessage('The name of the animal is required')
        .isLength({ min: 1 }).withMessage('The name must be at least 5 characters'),

    check('scientificName')
        .exists()
        .notEmpty()
        .isAlpha().withMessage('They must be alphabetical characters'),

    check('photographer')
        .exists()
        .notEmpty().withMessage('The photographer is required'),

    check('sound')
        .exists()
        .notEmpty().withMessage('Sound is required')
        .isURL().withMessage('Sound must be a valid URL'),

    check('description')
        .exists()
        .notEmpty().withMessage('Description is required')
        .isLength({ min: 5 }).withMessage('The description must be at least 5 characters'),

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