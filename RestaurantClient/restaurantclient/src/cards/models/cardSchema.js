import Joi from "joi";

const urlRegex = /^(https?:\/\/.+)$|(^.*\.(png|jpg|jpeg|gif|webp|svg))$/i;

const cardSchema = {
  name: Joi.string().min(2).max(20).required(),
  category: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(2).max(1024).required(),
  tag: Joi.string().min(2).max(50).required(),
  imageUrl: Joi.string()
    .ruleset.regex(urlRegex)
    .rule({ message: 'card.image "url" mast be a valid url' })
    .allow(""),
  imageAlt: Joi.string().min(2).max(256).allow(""),
  price: Joi.number().required(),
};

export default cardSchema;