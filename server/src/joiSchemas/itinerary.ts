import Joi from 'joi';

const itinerarySchema = Joi.object({
    title: Joi.string().required().trim(),
    img: Joi.string().required().trim(),
    authorName: Joi.string().required().trim(),
    authorPic: Joi.string().required().trim(),
    price: Joi.number().min(0).max(5).required(),
    duration: Joi.number().required(),
});

export default itinerarySchema;