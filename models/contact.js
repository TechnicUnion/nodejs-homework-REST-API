const { Schema, model } = require('mongoose');
const Joi = require('joi')
const { handleMongooseError } = require('../helpers')

const contactSchema = Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
     owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
}, { versionKey: false });

contactSchema.post('save', handleMongooseError);



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

const schemas = {
    addSchemaPost,
    addSchemaPut,
    updateFavoriteSchema,
}

const Contact = model('contact', contactSchema);

module.exports = {
    Contact,
    schemas
};

