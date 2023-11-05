import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    DB_URI: Joi.required(),
    PORT: Joi.number().default(3000),
    DEFAULT_LIMIT: Joi.number().default(6),
    DEFAULT_OFFSET: Joi.number().default(0),
});