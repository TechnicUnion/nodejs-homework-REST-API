const Joi = require('joi')

const addSchemaPost = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2}).required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
})

const addSchemaPut = Joi.object({
  name: Joi.string(),
  email: Joi.string().email({ minDomainSegments: 2}),
  phone: Joi.string(),
  favorite: Joi.boolean(),
})

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
})

module.exports = {
    addSchemaPost,
    addSchemaPut,
    updateFavoriteSchema,
}