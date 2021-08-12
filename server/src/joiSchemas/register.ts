import Joi from "joi";

const registerSchema = Joi.object()
  .options({ abortEarly: false })
  .keys({
    firstName: Joi.string()
      .required()
      .trim()
      .min(2)
      .messages({
        "string.empty": "First name is required",
        "string.min": "First name length must be at least 2 characters long",
        "string.required": "The first name field is mandatory"
      }),
    lastName: Joi.string().required().trim().min(2).messages({
        "string.empty": "Last name is required",
        "string.min": "Last name length must be at least 2 characters long",
        "string.required": "The last name field is mandatory"
      }),
    email: Joi.string().email().required().trim().messages({
        "string.empty": "Email is required",
        "string.email": "The email entered is not valid",
        "string.required": "The email field is mandatory"
      }),
    password: Joi.string().min(4).required().trim().messages({
        "string.empty": "Password is required",
        "string.min": "Password length must be at least 4 characters long",
        "string.required": "The password field is mandatory"
      }),
    userPic: Joi.string().required().trim().messages({
        "string.empty": "User pic is required",
        "string.required": "The user pic field is mandatory"
      }),
    country: Joi.string().required().trim().messages({
        "string.empty": "Country is required",
        "string.required": "The country field is mandatory"
      }),
  });

export default registerSchema;
