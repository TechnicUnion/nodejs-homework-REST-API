const Joi = require('joi')

const addSchemaPost = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2}).required(),
  phone: Joi.string().required(),
})

const addSchemaPut = Joi.object({
  name: Joi.string(),
  email: Joi.string().email({ minDomainSegments: 2}),
  phone: Joi.string(),
})

module.exports = {
    addSchemaPost,
    addSchemaPut,
}