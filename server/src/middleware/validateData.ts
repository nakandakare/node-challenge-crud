import { Schema } from "joi";
import { NextFunction } from "express";

const validateData = (schema: Schema) => {
  return async (req: any, res: any, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (err) {
      res.send({ validatorErrors: err.details, success: false });
    }
  };
};

export default validateData;
