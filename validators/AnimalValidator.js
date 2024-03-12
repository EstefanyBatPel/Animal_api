import { param } from "express-validator";
import AnimalModel from "../models/AnimalModel.js";
import { validateResult } from "../helpers/validateHelpers.js";


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