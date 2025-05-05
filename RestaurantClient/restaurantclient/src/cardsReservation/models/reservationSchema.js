import Joi from "joi";

const reservationSchema = {
  customerName: Joi.string().min(2).max(30).required()
    .messages({
      'string.empty': 'Customer name is required',
      'string.min': 'Name must be at least 2 characters',
      'string.max': 'Name cannot exceed 30 characters'
    }),

    phone: Joi.string()
    .ruleset.regex(/^0[0-9]{1,2}-?\s?[0-9]{7}$/)
    .rule({ message: 'card "phone" mast be a valid phone number' })
    .required(),

  partySize: Joi.number().integer().min(1).max(15)
    .messages({
      'number.base': 'Must be a number',
      'number.min': 'At least 1 person required',
      'number.max': 'Maximum 20 people allowed',
      'any.required': 'Party size is required'
    }),

  date: Joi.date().greater("now").required(),
  
  time: Joi.string().required(),

  message: Joi.string().max(256).allow('')
    .messages({
      'string.max': 'Cannot exceed 256 characters'
    }),
  status: Joi.string().min(2).max(50).required()

};

export default reservationSchema;