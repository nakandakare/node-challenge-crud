import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().email().required().trim().messages({
    "string.empty": "Email is required",
    "string.email": "The email entered is not valid",
    "string.required": "The email field is mandatory",
  }),
  password: Joi.string().required().trim().messages({
    "string.empty": "Password is required",
    "string.required": "The password field is mandatory",
  }),
});

export default loginSchema;
