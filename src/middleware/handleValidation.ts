import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate =  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        return next()
    }

    const extratecErros: object[] = []

    errors.array().map(err => extratecErros.push({[err.param]: err.msg}))

    res.status(422).json({
        errors: extratecErros,
    });
}