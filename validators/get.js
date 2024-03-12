import {check} from 'express-validator'
import { validateResult } from '../helpers/validateHelper.js';

// const {check} = require('express-validator')
// const {validateResult} = require('../helpers/validateHelper')

// Reglas de validación para la creación de un animal
export const validateGet = [
    check('name')
        .exists()
        .not()
        .isEmpty(),

    check('scientificName')
        .exists()
        .not()
        .isEmpty(),

    check('photographer')
        .exists()
        .not()
        .isEmpty(),

    check('image')
        .exists()
        .not()
        .isEmpty(),

    check('sound')
        .exists()
        .not()
        .isEmpty(),

    check('description')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 5 }).withMessage('La descripcion debe tener al menos 5 caracteres'),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];