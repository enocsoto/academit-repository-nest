import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  DB_URI: Joi.required(),
  DB_PORT: Joi.number().default(3000),
  PORT: Joi.required(),
  DEFAULT_LIMI: Joi.number().default(5),
  DEFAULT_OFFSET: Joi.number().default(0),
});
