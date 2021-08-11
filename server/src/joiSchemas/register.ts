import Joi from 'joi';

const registerSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    userPic: Joi.string().required(),
    country: Joi.string().required(),
});

export default registerSchema;