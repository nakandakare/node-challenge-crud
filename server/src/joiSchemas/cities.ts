import Joi from 'joi';

const citySchema = Joi.object({
    name: Joi.string().required().trim(),
    country: Joi.string().required().trim(),
    img: Joi.string().required().trim(),
});

export default citySchema;