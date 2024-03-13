import {check} from 'express-validator'
import { validateResult } from '../helpers/validateHelper.js';

// Reglas de validación al obtener los datos de la api
export const validateGet = [
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

    (req, res, next) => {
        validateResult(req, res, next)
    }
  ];

// Reglas de validación para la creación de un animal
export const validateCreate = [
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
        .not() //cosas que no queremos que aparezcan
        .isEmpty()

        //.notEmpty
        .isLength({ min: 5 }).withMessage('La descripcion debe tener al menos 5 caracteres'),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];