import Joi from 'joi';

const citySchema = Joi.object({
    name: Joi.string().required(),
    country: Joi.string().required(),
    img: Joi.string().required(),
});

export default citySchema;