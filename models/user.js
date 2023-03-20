const { Schema, model } = require('mongoose');
const Joi = require('joi')
const { handleMongooseError } = require('../helpers')

const subscriptionUser = ["starter", "pro", "business"];

const userSchema = new Schema({
    password: {
        type: String,
        required: [true, 'Set password for user'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: subscriptionUser,
        default: "starter"
    },
    avatarURL: {
        type: String,
    },
    token: String
}, { versionKey: false, timesTamps: true });

userSchema.post('save', handleMongooseError);

const registerSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    subscription: Joi.string().validate(...subscriptionUser),
});

const loginSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
});

const schemas = {
    registerSchema,
    loginSchema,
}

const User = model('user', userSchema);

module.exports = {
    User,
    schemas,
};