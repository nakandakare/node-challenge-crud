import { Schema } from "joi";
import { NextFunction } from "express";

const validateData = (schema: Schema) => {
  return async (req: any, res: any, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (err) {
      res.status(400).send({ message: err.message, ok: false });
    }
  };
};

export default validateData;
